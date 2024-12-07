import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, updateNote, deleteNote } from "../utils/api";

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      const response = await getNote(id);
      setNote(response.data);
      setTitle(response.data.title);
      setContents(response.data.contents);
    };
    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    const updatedNote = { title, contents };
    await updateNote(id, updatedNote);
    setEditing(false);
    setNote({ id, ...updatedNote });
  };

  const handleDelete = async () => {
    await deleteNote(id);
    navigate("/");
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div>
      {editing ? (
        <>
          <h2>Edit Note</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.contents}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default NoteDetails;
