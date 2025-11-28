export interface TarotCard {
  id: number;
  name: string;
  suit: 'Major' | 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
  keywords: string[];
  description: string;
  url: string;
}

export const TAROT_DECK: TarotCard[] = [
  // --- Major Arcana (0-21) ---
  { id: 0, name: "The Fool", suit: "Major", keywords: ["New beginnings", "Innocence", "Spontaneity"], description: "A leap of faith into the unknown.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 1, name: "The Magician", suit: "Major", keywords: ["Manifestation", "Resourcefulness", "Power"], description: "You have all the tools you need.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 2, name: "The High Priestess", suit: "Major", keywords: ["Intuition", "Unconscious", "Inner voice"], description: "Trust your gut feeling.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 3, name: "The Empress", suit: "Major", keywords: ["Fertility", "Femininity", "Beauty", "Nature"], description: "Abundance and nurturing energy.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 4, name: "The Emperor", suit: "Major", keywords: ["Authority", "Structure", "Control"], description: "Stability through discipline.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 5, name: "The Hierophant", suit: "Major", keywords: ["Spiritual wisdom", "Religious beliefs", "Tradition"], description: "Conformity to social rules or spiritual path.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 6, name: "The Lovers", suit: "Major", keywords: ["Love", "Harmony", "Relationships", "Values"], description: "A significant union or choice.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 7, name: "The Chariot", suit: "Major", keywords: ["Control", "Willpower", "Success", "Action"], description: "Victory through focus and determination.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 8, name: "Strength", suit: "Major", keywords: ["Strength", "Courage", "Persuasion", "Influence"], description: "Inner strength and compassion.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 9, name: "The Hermit", suit: "Major", keywords: ["Soul-searching", "Introspection", "Being alone"], description: "Looking inward for answers.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 10, name: "Wheel of Fortune", suit: "Major", keywords: ["Good luck", "Karma", "Life cycles", "Destiny"], description: "The turning point of fate.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 11, name: "Justice", suit: "Major", keywords: ["Justice", "Fairness", "Truth", "Law"], description: "Cause and effect; truth revealed.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 12, name: "The Hanged Man", suit: "Major", keywords: ["Pause", "Surrender", "Letting go", "New perspective"], description: "Sacrifice for greater understanding.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 13, name: "Death", suit: "Major", keywords: ["Endings", "Change", "Transformation", "Transition"], description: "The end of a cycle, making way for new.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 14, name: "Temperance", suit: "Major", keywords: ["Balance", "Moderation", "Patience", "Purpose"], description: "Finding the middle path.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 15, name: "The Devil", suit: "Major", keywords: ["Shadow self", "Attachment", "Addiction", "Restriction"], description: "Bondage to material desires.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 16, name: "The Tower", suit: "Major", keywords: ["Sudden change", "Upheaval", "Chaos", "Revelation"], description: "Destruction of false structures.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 17, name: "The Star", suit: "Major", keywords: ["Hope", "Faith", "Purpose", "Renewal"], description: "A light in the darkness.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 18, name: "The Moon", suit: "Major", keywords: ["Illusion", "Fear", "Anxiety", "Subconscious"], description: "Things are not what they seem.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 19, name: "The Sun", suit: "Major", keywords: ["Positivity", "Fun", "Warmth", "Success"], description: "Joy and vitality.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 20, name: "Judgement", suit: "Major", keywords: ["Judgement", "Rebirth", "Inner calling", "Absolution"], description: "A moment of awakening.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 21, name: "The World", suit: "Major", keywords: ["Completion", "Integration", "Accomplishment", "Travel"], description: "A cycle completed successfully.", url: "https://meee.com.tw/Gj34aAn" },

  // --- Wands (22-35) ---
  { id: 22, name: "Ace of Wands", suit: "Wands", keywords: ["Inspiration", "New opportunities", "Growth"], description: "A spark of creative energy.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 23, name: "Two of Wands", suit: "Wands", keywords: ["Future planning", "Progress", "Decisions"], description: "Planning your next step.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 24, name: "Three of Wands", suit: "Wands", keywords: ["Expansion", "Foresight", "Overseas"], description: "Looking ahead to expansion.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 25, name: "Four of Wands", suit: "Wands", keywords: ["Celebration", "Joy", "Harmony", "Homecoming"], description: "A time of celebration.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 26, name: "Five of Wands", suit: "Wands", keywords: ["Conflict", "Disagreement", "Competition"], description: "Struggle and competition.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 27, name: "Six of Wands", suit: "Wands", keywords: ["Success", "Public recognition", "Confidence"], description: "Victory and acclaim.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 28, name: "Seven of Wands", suit: "Wands", keywords: ["Challenge", "Competition", "Protection"], description: "Defending your position.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 29, name: "Eight of Wands", suit: "Wands", keywords: ["Movement", "Fast paced change", "Action"], description: "Swift action and news.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 30, name: "Nine of Wands", suit: "Wands", keywords: ["Resilience", "Courage", "Persistence"], description: "Close to the finish line, but weary.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 31, name: "Ten of Wands", suit: "Wands", keywords: ["Burden", "Extra responsibility", "Hard work"], description: "Carrying a heavy load.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 32, name: "Page of Wands", suit: "Wands", keywords: ["Inspiration", "Ideas", "Discovery"], description: "A messenger of creative beginnings.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 33, name: "Knight of Wands", suit: "Wands", keywords: ["Energy", "Passion", "Inspired action"], description: "Charging forward with passion.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 34, name: "Queen of Wands", suit: "Wands", keywords: ["Courage", "Confidence", "Independence"], description: "Vibrant and determined energy.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 35, name: "King of Wands", suit: "Wands", keywords: ["Natural-born leader", "Vision", "Entrepreneur"], description: "Leading with bold vision.", url: "https://meee.com.tw/Gj34aAn" },

  // --- Cups (36-49) ---
  { id: 36, name: "Ace of Cups", suit: "Cups", keywords: ["Love", "New feelings", "Compassion"], description: "New emotional beginnings.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 37, name: "Two of Cups", suit: "Cups", keywords: ["Unified love", "Partnership", "Attraction"], description: "A deep connection.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 38, name: "Three of Cups", suit: "Cups", keywords: ["Celebration", "Friendship", "Creativity"], description: "Joy with friends.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 39, name: "Four of Cups", suit: "Cups", keywords: ["Meditation", "Contemplation", "Apathy"], description: "Missing opportunities due to introspection.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 40, name: "Five of Cups", suit: "Cups", keywords: ["Loss", "Grief", "Self-pity"], description: "Crying over spilled milk.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 41, name: "Six of Cups", suit: "Cups", keywords: ["Revisiting the past", "Childhood memories", "Innocence"], description: "Nostalgia and simple joys.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 42, name: "Seven of Cups", suit: "Cups", keywords: ["Opportunities", "Choices", "Wishful thinking"], description: "Many options, potential confusion.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 43, name: "Eight of Cups", suit: "Cups", keywords: ["Walking away", "Disillusionment", "Leaving behind"], description: "Seeking something higher.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 44, name: "Nine of Cups", suit: "Cups", keywords: ["Contentment", "Satisfaction", "Gratitude"], description: "The wish card; emotional fulfillment.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 45, name: "Ten of Cups", suit: "Cups", keywords: ["Divine love", "Blissful relationships", "Harmony"], description: "Perfect family happiness.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 46, name: "Page of Cups", suit: "Cups", keywords: ["Creative opportunities", "Intuitive messages", "Curiosity"], description: "A message of love or creativity.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 47, name: "Knight of Cups", suit: "Cups", keywords: ["Creativity", "Romance", "Charm", "Imagination"], description: "Following your heart.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 48, name: "Queen of Cups", suit: "Cups", keywords: ["Compassionate", "Caring", "Emotionally stable"], description: "Nurturing emotional depth.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 49, name: "King of Cups", suit: "Cups", keywords: ["Emotionally balanced", "Compassionate", "Diplomatic"], description: "Mastery of emotions.", url: "https://meee.com.tw/Gj34aAn" },

  // --- Swords (50-63) ---
  { id: 50, name: "Ace of Swords", suit: "Swords", keywords: ["Breakthroughs", "New ideas", "Mental clarity"], description: "A new idea or truth.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 51, name: "Two of Swords", suit: "Swords", keywords: ["Difficult choices", "Indecision", "Stalemate"], description: "Blocked vision; a need to decide.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 52, name: "Three of Swords", suit: "Swords", keywords: ["Heartbreak", "Emotional pain", "Sorrow"], description: "Painful separation or grief.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 53, name: "Four of Swords", suit: "Swords", keywords: ["Rest", "Relaxation", "Meditation", "Recuperation"], description: "Time to heal and recover.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 54, name: "Five of Swords", suit: "Swords", keywords: ["Conflict", "Disagreement", "Competition"], description: "Winning at all costs.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 55, name: "Six of Swords", suit: "Swords", keywords: ["Transition", "Change", "Rite of passage"], description: "Moving to calmer waters.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 56, name: "Seven of Swords", suit: "Swords", keywords: ["Betrayal", "Deception", "Getting away with it"], description: "Stealth and strategy.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 57, name: "Eight of Swords", suit: "Swords", keywords: ["Imprisonment", "Entrapment", "Self-victimization"], description: "Trapped by your own thoughts.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 58, name: "Nine of Swords", suit: "Swords", keywords: ["Anxiety", "Worry", "Fear", "Depression"], description: "Nightmares and mental anguish.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 59, name: "Ten of Swords", suit: "Swords", keywords: ["Painful endings", "Deep wounds", "Betrayal", "Loss"], description: "Rock bottom; nowhere to go but up.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 60, name: "Page of Swords", suit: "Swords", keywords: ["New ideas", "Curiosity", "Thirst for knowledge"], description: "Mental energy and curiosity.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 61, name: "Knight of Swords", suit: "Swords", keywords: ["Action", "Impulsiveness", "Speed"], description: "Rushing into action.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 62, name: "Queen of Swords", suit: "Swords", keywords: ["Independent", "Unbiased judgement", "Clear boundaries"], description: "Sharp intellect and clarity.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 63, name: "King of Swords", suit: "Swords", keywords: ["Mental clarity", "Intellectual power", "Authority"], description: "Truth and intellectual power.", url: "https://meee.com.tw/Gj34aAn" },

  // --- Pentacles (64-77) ---
  { id: 64, name: "Ace of Pentacles", suit: "Pentacles", keywords: ["Opportunity", "Prosperity", "New venture"], description: "A new financial or material opportunity.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 65, name: "Two of Pentacles", suit: "Pentacles", keywords: ["Multiple priorities", "Time management", "Adaptability"], description: "Juggling resources.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 66, name: "Three of Pentacles", suit: "Pentacles", keywords: ["Teamwork", "Collaboration", "Learning"], description: "Building together.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 67, name: "Four of Pentacles", suit: "Pentacles", keywords: ["Saving money", "Security", "Scarcity", "Control"], description: "Holding on too tight.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 68, name: "Five of Pentacles", suit: "Pentacles", keywords: ["Financial loss", "Poverty", "Isolation"], description: "Hardship and insecurity.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 69, name: "Six of Pentacles", suit: "Pentacles", keywords: ["Giving", "Receiving", "Sharing wealth"], description: "Charity and generosity.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 70, name: "Seven of Pentacles", suit: "Pentacles", keywords: ["Long-term view", "Sustainable results", "Perseverance"], description: "Waiting for the harvest.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 71, name: "Eight of Pentacles", suit: "Pentacles", keywords: ["Apprenticeship", "Repetitive tasks", "Mastery"], description: "Hard work and craftsmanship.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 72, name: "Nine of Pentacles", suit: "Pentacles", keywords: ["Abundance", "Luxury", "Self-sufficiency"], description: "Enjoying the fruits of labor.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 73, name: "Ten of Pentacles", suit: "Pentacles", keywords: ["Wealth", "Financial security", "Family", "Long-term success"], description: "Legacy and lasting wealth.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 74, name: "Page of Pentacles", suit: "Pentacles", keywords: ["Manifestation", "Financial opportunity", "Skill development"], description: "A message of opportunity.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 75, name: "Knight of Pentacles", suit: "Pentacles", keywords: ["Hard work", "Productivity", "Routine", "Conservatism"], description: "Slow and steady progress.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 76, name: "Queen of Pentacles", suit: "Pentacles", keywords: ["Nurturing", "Practical", "Providing"], description: "Practicality and comfort.", url: "https://meee.com.tw/Gj34aAn" },
  { id: 77, name: "King of Pentacles", suit: "Pentacles", keywords: ["Wealth", "Business", "Leadership", "Security"], description: "Master of the material realm.", url: "https://meee.com.tw/Gj34aAn" },
];

