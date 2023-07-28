function AddNote({
  addNote,
  isUpdating,
  setInputValue,
  inputValue,
  handleUpdate,
}) {
  const maxWord = 2000;

  const handleNoteText = (e) => {
    if (maxWord - inputValue.length > 0) setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim().length > 0) {
      addNote(inputValue);
      setInputValue(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="note new">
      <div className="note-list">
        <textarea
          cols="10"
          rows="8"
          value={inputValue}
          placeholder="Type to add note..."
          onChange={handleNoteText}
        ></textarea>
      </div>
      <div className="note-footer">
        <small>{maxWord - inputValue.length} word remaining</small>
        {isUpdating ? (
          <button className="edit-btn" onClick={handleUpdate}>
            Save
          </button>
        ) : (
          <button className="save-btn" onClick={handleAddNote}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default AddNote;
