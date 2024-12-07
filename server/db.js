import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "safwat911",
    database: "notes_app",
  })
  .promise();

//get a list of  all notes
export async function getAllnotes() {
  const [rows] = await pool.query("select * from notes");
  return rows;
}

//get a single note
export async function getNote(id) {
  const [rows] = await pool.query(
    `
    SELECT * 
    FROM notes
    WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}
//create a new note
export async function createNote(title, contents) {
  const [result] = await pool.query(
    `
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
    `,
    [title, contents]
  );
  return getNote(result.insertId);
}

//delete a note
export async function deleteNote(id) {
  await pool.query("DELETE FROM notes WHERE id = ?", [id]);
  return { message: "Note deleted successfully" };
}

//edit a note
export async function editNote(id, title, contents) {
  await pool.query(
    `
    UPDATE notes
    SET title = ?, contents =?
    WHERE id =?
    `,
    [title, contents, id]
  );
  return getNote(id);
}
