import excludeWords from "../../../entities/excludeWords";

const emojiRegex = /\p{Extended_Pictographic}/u;

export const useWordDisplayLogic = () => {
  const splitIntoWords = (sentence: string): string[] => {
    // 単語 or 記号を抽出（数字も含む）
    const rawWords = sentence.match(/\b[\w’']+\b|[^\s\w]/gu) || [];

    // 🐶❤️ など絵文字を含むトークンだけ除外
    return rawWords.filter((word) => !emojiRegex.test(word));
  };
  const isClickableWord = (word: string): boolean => {
    const isAlphabet = /^[a-zA-Z]+$/.test(word); // 単語がアルファベットのみか
    const isExcluded = excludeWords.includes(word.toLowerCase()); // 除外単語リストに含まれるか
    return isAlphabet && !isExcluded;
  };

  return { splitIntoWords, isClickableWord };
};
