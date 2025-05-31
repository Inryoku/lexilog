export const WordEntryCard = ({ entry }) => {
  return (
    <div className="word-entry-card">
      <h3>{entry.lemma}</h3>
      <p>Last clicked: {new Date(entry.lastClickedTime).toLocaleString()}</p>
      <p>Frequency: {entry.frequency}</p>
      <p>Definition: {entry.definition}</p>
      {/* Add more fields as necessary */}
    </div>
  );
};
