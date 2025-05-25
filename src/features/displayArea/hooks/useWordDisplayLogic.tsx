import excludeWords from "../../../entities/excludeWords";
export const useWordDisplayLogic = () => {
  const splitIntoWords = (sentence: string): string[] => {
    return sentence.match(/\b[\w’']+\b|[^\s\w]/g) || [];
  };
  const isClickableWord = (word: string): boolean => {
    const isAlphabet = /^[a-zA-Z]+$/.test(word); // 単語がアルファベットのみか
    const isExcluded = excludeWords.includes(word.toLowerCase()); // 除外単語リストに含まれるか
    return isAlphabet && !isExcluded;
  };

  return { splitIntoWords, isClickableWord };
};
