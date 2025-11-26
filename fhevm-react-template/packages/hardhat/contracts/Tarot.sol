// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity ^0.8.24;

import { FHE, euint8, ebool } from "@fhevm/solidity/lib/FHE.sol";
import { ZamaEthereumConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Tarot is Ownable, ZamaEthereumConfig {
    // 塔罗牌总数
    uint8 public constant DECK_SIZE = 78;

    // 占卜记录结构
    struct Reading {
        uint256 id;
        address querent;        // 问卜者
        uint256 timestamp;
        uint8 spreadType;       // 牌阵类型
        bytes32 questionHash;   // 问题哈希（承诺）
        
        // 核心加密数据
        // 使用数组存储抽出的牌
        // 注意：euint8 是加密类型，不能直接在 mapping/struct 里 public view 返回，
        // 需要专门的 view 函数
        euint8[] encryptedCardIds;      // 0-77
        ebool[] encryptedIsReversed;    // true/false
        
        bool isFulfilled;       // 是否完成抽牌
    }

    // 计数器
    uint256 public nextReadingId;

    // 存储所有占卜记录
    mapping(uint256 => Reading) public readings;
    // 用户的所有占卜 ID
    mapping(address => uint256[]) public userReadingIds;

    event ReadingRequested(uint256 indexed readingId, address indexed querent);
    event ReadingFulfilled(uint256 indexed readingId);

    constructor() Ownable(msg.sender) {}

    /**
     * @notice 请求一次占卜
     * @param _spreadType 牌阵类型 (例如 0=单张, 1=圣三角)
     * @param _questionHash 问题的哈希，用于仪式绑定
     * @param _userSeed 用户提供的随机种子，用于注入能量
     */
    function requestReading(
        uint8 _spreadType,
        bytes32 _questionHash,
        uint256 _userSeed
    ) external returns (uint256) {
        uint256 readingId = nextReadingId++;
        
        Reading storage reading = readings[readingId];
        reading.id = readingId;
        reading.querent = msg.sender;
        reading.timestamp = block.timestamp;
        reading.spreadType = _spreadType;
        reading.questionHash = _questionHash;
        
        // 根据牌阵决定抽几张牌
        uint8 cardsToDraw = 3; 
        if (_spreadType == 0) cardsToDraw = 1;
        else if (_spreadType == 1) cardsToDraw = 3;
        else if (_spreadType == 2) cardsToDraw = 5; 

        // --- 链上伪随机逻辑 ---
        uint256 seed = uint256(keccak256(abi.encodePacked(
            block.timestamp, 
            block.prevrandao, 
            msg.sender, 
            _userSeed,
            readingId
        )));

        // 临时数组用于去重
        uint8[] memory drawnIds = new uint8[](cardsToDraw);
        bool[] memory isReversed = new bool[](cardsToDraw);

        for (uint8 i = 0; i < cardsToDraw; i++) {
            uint8 newCard;
            bool duplicate;
            
            for (uint8 attempt = 0; attempt < 5; attempt++) {
                seed = uint256(keccak256(abi.encodePacked(seed, attempt)));
                newCard = uint8(seed % DECK_SIZE);
                
                duplicate = false;
                for (uint8 j = 0; j < i; j++) {
                    if (drawnIds[j] == newCard) {
                        duplicate = true;
                        break;
                    }
                }
                if (!duplicate) break;
            }
            require(!duplicate, "Failed to draw unique cards");

            drawnIds[i] = newCard;
            
            // 生成正逆位
            seed = uint256(keccak256(abi.encodePacked(seed, "reversed")));
            isReversed[i] = (seed % 2) == 1;
        }

        // --- FHE 加密存储 ---
        for (uint8 i = 0; i < cardsToDraw; i++) {
            // FHE.asEuint8 将明文转换为密文 (Trivial Encryption)
            euint8 encCard = FHE.asEuint8(drawnIds[i]);
            ebool encRev = FHE.asEbool(isReversed[i]);

            reading.encryptedCardIds.push(encCard);
            reading.encryptedIsReversed.push(encRev);

            // 授权给合约自己（如果是为了后续计算）和用户（为了解密）
            FHE.allowThis(encCard);
            FHE.allowThis(encRev);
            FHE.allow(encCard, msg.sender);
            FHE.allow(encRev, msg.sender);
        }

        reading.isFulfilled = true;
        userReadingIds[msg.sender].push(readingId);

        emit ReadingRequested(readingId, msg.sender);
        emit ReadingFulfilled(readingId);

        return readingId;
    }

    /**
     * @notice 获取某次占卜的加密牌句柄
     */
    function getReading(uint256 _readingId) external view returns (
        uint256 id,
        uint256 timestamp,
        uint8 spreadType,
        euint8[] memory encryptedCardIds,
        ebool[] memory encryptedIsReversed
    ) {
        Reading storage r = readings[_readingId];
        return (
            r.id,
            r.timestamp,
            r.spreadType,
            r.encryptedCardIds,
            r.encryptedIsReversed
        );
    }

    /**
     * @notice 获取用户的所有占卜 ID
     */
    function getUserReadingIds(address _user) external view returns (uint256[] memory) {
        return userReadingIds[_user];
    }
}

