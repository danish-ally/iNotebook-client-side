import { React, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Modal, Button } from "react-bootstrap";

const Noteitem = (props) => {
  const [show, setshow] = useState(false);
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title"> {note.title}</h5>
          <p class="card-text">{note.description}</p>
          <DeleteIcon style={{ marginLeft: "10px", cursor: "pointer" }} />
          <EditIcon
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => setshow(true)}
          />
          <Modal show={show}>
            <Modal.Header>
              <h3>Edit Note</h3>
            </Modal.Header>
            <Modal.Body>
              <p>Hey i a body</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setshow(false)}>Close</Button>
              <Button onClick={() => setshow(false)}>Save</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
