import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title"> {note.title}</h5>
          <p class="card-text">{note.description}</p>
         <DeleteIcon style={{marginLeft: "10px", cursor: "pointer"}}/>
          <EditIcon style={{marginLeft: "10px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
