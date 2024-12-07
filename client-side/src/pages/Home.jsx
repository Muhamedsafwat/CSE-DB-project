import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotesList from "../components/NotesList";
import NoteForm from "../components/NoteForm";
import { getNotes, createNote } from "../utils/api";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await getNotes();
      setNotes(response.data);
    };
    fetchNotes();
  }, []);

  const handleAddNote = async (note) => {
    const response = await createNote(note);
    setNotes([...notes, response.data]);
  };

  const handleViewNote = (id) => {
    navigate(`/notes/${id}`);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-red-500">All Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NotesList notes={notes} onViewNote={handleViewNote} />
    </div>
  );
};

export default Home;
