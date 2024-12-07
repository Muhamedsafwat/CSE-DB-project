import React from "react";

const NotesList = ({ notes, onViewNote }) => {
  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <button onClick={() => onViewNote(note.id)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
