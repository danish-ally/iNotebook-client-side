import React from "react";
import { useContext } from "react";
import noteContext from "../../context/notes/noteContext";
import AddNote from "../addNote/AddNote";
import Noteitem from "../noteItem/NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Yours Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
