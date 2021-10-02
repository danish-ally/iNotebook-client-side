import React from "react";
import { useContext } from "react";
import noteContext from "../../context/notes/noteContext";
import Noteitem from "../noteItem/NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h2>Yours Notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
