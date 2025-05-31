export const fetchMeaning = async (lemma: string): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${lemma}`
    );
    const data = await response.json();

    const meaning =
      data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition || null;

    console.log("Fetched meaning:", meaning);
    return meaning;
  } catch (error) {
    console.error("Error fetching meaning: ", error);
    return null;
  }
};
