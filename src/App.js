import { useEffect, useState } from "react";
import NoteList from "./NoteList";
import Search from "./Search";
import Header from "./Header";
import FlashMessage from "./FlashMessage";

function App() {
  const [notes, setNotes] = useState([
    { id: 0, text: "This is my first node", date: "01/04/2023" },
    { id: 1, text: "This is my second node", date: "01/02/2023" },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showFlasMessage, setShowFlash] = useState(false);
  const [message, setMessage] = useState("");
  const [isUpdating, setUpdating] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("");
  // const [text , setText] = useState({});

  const addNote = (text) => {
    setShowFlash(true);
    setMessage("Note added!");
    const date = new Date();
    const newNote = {
      id: notes.length,
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    addLoLocalStorage(newNotes);
  };

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("notes"));
    if (saveNotes) setNotes(saveNotes);
  }, []);

  const addLoLocalStorage = (note) => {
    localStorage.setItem("notes", JSON.stringify(note));
  };

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    addLoLocalStorage(newNotes);
    setShowFlash(true);
    setMessage("Note deleted!");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowFlash(false);
    }, 1000);
  }, [notes]);

  const handleEdit = (id) => {
    setInputValue(notes[id].text);
    setUpdating(true);
    setIndex(id);
  };

  const handleUpdate = () => {
    if (inputValue.trim().length > 0) {
      const newNotes = [...notes];
      newNotes[index].text = inputValue;
      newNotes[index].date = new Date().toLocaleDateString();
      setNotes(newNotes);
      setInputValue("");
      addLoLocalStorage(newNotes);
      setUpdating(false);
      setShowFlash(true);
      setMessage("Note Updated!");
    }
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className={darkMode ? "dark-mode" : ""}
    >
      <div className="container">
        <Header
          handleDarkMode={setDarkMode}
          setColor={setColor}
          darkMode={darkMode}
        />
        <Search setSearchText={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNote={addNote}
          handleDeleteNote={DeleteNote}
          handleEdit={handleEdit}
          isUpdating={isUpdating}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleUpdate={handleUpdate}
        />
        <FlashMessage showFlasMessage={showFlasMessage} message={message} />
      </div>
    </div>
  );
}

export default App;
