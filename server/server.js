import express from "express";
import cors from "cors";
const app = express();

//import database queries
import {
  getAllnotes,
  getNote,
  createNote,
  deleteNote,
  editNote,
} from "./db.js";

//make app accept json request
app.use(express.json());
//add cors middleware
app.use(cors());

//get all notes
app.get("/notes", async (req, res) => {
  const notes = await getAllnotes();
  res.send(notes);
});

//get one note
app.get("/notes/:id", async (req, res) => {
  const note = await getNote(req.params.id);
  if (!note) {
    return res.status(404).send("Note not found");
  }
  res.send(note);
});

//create a new note
app.post("/notes", async (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res.status(400).send("Title and contents are required");
  }

  const result = await createNote(title, contents);
  res.send(result);
});

//delete a note
app.delete("/notes/:id", async (req, res) => {
  const result = await deleteNote(req.params.id);
  res.send(result);
});

//edit a note
app.put("/notes/:id", async (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents) {
    return res.status(400).send("Title and contents are required");
  }
  const note = await editNote(req.params.id, title, contents);
  res.send(note);
});

//error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("internal server error: " + err.stack);
});

//listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
