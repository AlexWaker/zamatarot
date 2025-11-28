"use client";

import { useCallback, useMemo, useState } from "react";
import { useDeployedContractInfo } from "../helper";
import { useWagmiEthers } from "../wagmi/useWagmiEthers";
import { FhevmInstance, useFHEDecrypt, useInMemoryStorage } from "@fhevm-sdk";
import { ethers } from "ethers";
import type { Contract } from "~~/utils/helper/contract";
import type { AllowedChainIds } from "~~/utils/helper/networks";

export type TarotSpreadType = 0 | 1 | 2; // 0: single, 1: three-card, 2: five-card

export interface DecryptedTarotReading {
  readingId: bigint;
  timestamp: bigint;
  spreadType: number;
  cardIds: Array<number | undefined>;
  isReversed: Array<boolean | undefined>;
  encryptedCardIds: string[];
  encryptedIsReversed: string[];
}

export const useTarotWagmi = (parameters: {
  instance: FhevmInstance | undefined;
  initialMockChains?: Readonly<Record<number, string>>;
}) => {
  const { instance, initialMockChains } = parameters;
  const { storage: fhevmDecryptionSignatureStorage } = useInMemoryStorage();

  // Wagmi + ethers interop
  const { chainId, accounts, isConnected, ethersReadonlyProvider, ethersSigner } = useWagmiEthers(initialMockChains);

  // Resolve deployed contract info once we know the chain
  const allowedChainId = typeof chainId === "number" ? (chainId as AllowedChainIds) : undefined;
  const { data: tarotContract } = useDeployedContractInfo({ contractName: "Tarot", chainId: allowedChainId });

  type TarotInfo = Contract<"Tarot"> & { chainId?: number };

  const [message, setMessage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentReading, setCurrentReading] = useState<{
    readingId: bigint;
    encryptedCardIds: string[];
    encryptedIsReversed: string[];
  } | null>(null);

  const hasContract = Boolean(tarotContract?.address && tarotContract?.abi);
  const hasSigner = Boolean(ethersSigner);

  const getContract = (mode: "read" | "write") => {
    if (!hasContract) return undefined;
    const providerOrSigner = mode === "read" ? ethersReadonlyProvider : ethersSigner;
    if (!providerOrSigner) return undefined;
    return new ethers.Contract(
      tarotContract!.address,
      (tarotContract as TarotInfo).abi,
      providerOrSigner,
    );
  };

  // Build decrypt requests for current reading
  const decryptRequests = useMemo(() => {
    if (!instance || !currentReading || !hasContract || !chainId) return undefined;
    const allHandles = [...currentReading.encryptedCardIds, ...currentReading.encryptedIsReversed];
    if (allHandles.length === 0) return undefined;
    return allHandles.map(handle => ({
      handle,
      contractAddress: tarotContract!.address,
    }) as const);
  }, [instance, currentReading, hasContract, chainId, tarotContract?.address]);

  const {
    canDecrypt,
    decrypt,
    isDecrypting,
    message: decryptMessage,
    results,
  } = useFHEDecrypt({
    instance,
    ethersSigner: ethersSigner as any,
    fhevmDecryptionSignatureStorage,
    chainId,
    requests: decryptRequests,
  });

  const decryptedReading: DecryptedTarotReading | null = useMemo(() => {
    if (!currentReading) return null;

    const { readingId, encryptedCardIds, encryptedIsReversed } = currentReading;

    const cardIds = encryptedCardIds.map(handle => {
      const val = results[handle];
      if (typeof val === "undefined") return undefined;
      try {
        // euint8 -> number 0-255
        return Number(val);
      } catch {
        return undefined;
      }
    });

    const isReversed = encryptedIsReversed.map(handle => {
      const val = results[handle];
      if (typeof val === "undefined") return undefined;
      return Boolean(val);
    });

    return {
      readingId,
      timestamp: BigInt(0), // not used yet on frontend
      spreadType: encryptedCardIds.length,
      cardIds,
      isReversed,
      encryptedCardIds,
      encryptedIsReversed,
    };
  }, [currentReading, results]);

  const requestReading = useCallback(
    async (spreadType: TarotSpreadType = 1) => {
      if (!hasContract || !hasSigner || !instance) {
        setMessage("Tarot contract or signer or FHEVM instance not available");
        return null;
      }

      const writeContract = getContract("write");
      if (!writeContract) {
        setMessage("Tarot contract write instance not available");
        return null;
      }

      setIsProcessing(true);
      setMessage("Requesting encrypted tarot reading...");

      try {
        const tx = await writeContract.requestReading(spreadType);
        setMessage("Waiting for transaction confirmation...");
        const receipt = await tx.wait();

        // Get latest readingId from contract (nextReadingId - 1)
        const nextId: bigint = await writeContract.nextReadingId();
        const readingId = nextId - 1n;

        // Fetch encrypted reading data
        const res = await writeContract.getReading(readingId);
        const encryptedCardIds = (res.encryptedCardIds ?? res[3]) as string[];
        const encryptedIsReversed = (res.encryptedIsReversed ?? res[4]) as string[];

        setCurrentReading({
          readingId,
          encryptedCardIds,
          encryptedIsReversed,
        });

        setMessage("Encrypted tarot reading ready. You can now decrypt.");
        return readingId;
      } catch (e) {
        const err = e as Error;
        setMessage(`Tarot reading request failed: ${err.message}`);
        return null;
      } finally {
        setIsProcessing(false);
      }
    },
    [hasContract, hasSigner, instance, getContract],
  );

  const decryptCurrentReading = useCallback(async () => {
    if (!currentReading || !canDecrypt) return false;
    try {
      await decrypt();
      return true;
    } catch (e) {
      const err = e as Error;
      setMessage(`Decryption failed: ${err.message}`);
      return false;
    }
  }, [currentReading, canDecrypt, decrypt]);

  return {
    // core state
    contractAddress: tarotContract?.address,
    isConnected,
    chainId,
    accounts,

    // request & decrypt
    requestReading,
    decryptCurrentReading,

    // flags & messages
    canDecrypt,
    isDecrypting,
    isProcessing,
    message: decryptMessage || message,

    // data
    currentReading,
    decryptedReading,
  };
};


