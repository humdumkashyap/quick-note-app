import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Note({ note, handleDeleteNote, handleEdit }) {
  const formatText = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  const { text, date, id } = note;
  return (
    <div className="note" key={id}>
      <div className="note-text">
        <span>{formatText(text)}</span>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <div
          className="icons"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FiEdit className="edit-btn" onClick={() => handleEdit(id)} />
          <MdDeleteForever
            className="delete-btn"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
