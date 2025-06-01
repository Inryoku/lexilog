export const fetchSynonyms = async (
  lemma: string
): Promise<string[] | null> => {
  try {
    const response = await fetch(`https://api.datamuse.com/words?ml=${lemma}`);
    const data = await response.json();

    // 上位30つだけ取り出して word だけ返す
    const synonymsCandidates = data.slice(0, 30).map((item: any) => item.word);

    console.log("Fetched synonyms:", synonymsCandidates);
    return synonymsCandidates;
  } catch (error) {
    console.error("Error fetching synonyms: ", error);
    return null;
  }
};
