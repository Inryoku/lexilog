export const fetchSynonyms = async (
  lemma: string
): Promise<string[] | null> => {
  try {
    const response = await fetch(`https://api.datamuse.com/words?ml=${lemma}`);
    const data = await response.json();

    // 上位3つだけ取り出して word だけ返す
    const synonyms = data.slice(0, 3).map((item: any) => item.word);

    console.log("Fetched synonyms:", synonyms);
    return synonyms;
  } catch (error) {
    console.error("Error fetching synonyms: ", error);
    return null;
  }
};
