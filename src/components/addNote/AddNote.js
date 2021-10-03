import { React, useState } from "react";
import { useContext } from "react";
import noteContext from "../../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" });

  const onChange = () => {};
  const handleClick = () => {};
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
