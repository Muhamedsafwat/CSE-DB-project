import React, { useState, useEffect } from "react";

const NoteForm = ({ onAddNote, onUpdateNote, currentNote }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContents(currentNote.contents);
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote) {
      onUpdateNote({ ...currentNote, title, contents });
    } else {
      onAddNote({ title, contents });
    }
    setTitle("");
    setContents("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentNote ? "Edit Note" : "Add Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        required
      />
      <button type="submit">{currentNote ? "Update" : "Add"} Note</button>
    </form>
  );
};

export default NoteForm;
