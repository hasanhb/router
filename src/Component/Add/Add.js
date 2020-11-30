import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Add.css";
const AddMovie = (props) => {
  const { className, handleAdd } = props;
  const [newMovie, setNewMovie] = useState({
    Id: Math.random(),
    Poster: "",
    Rating: 1,
    name: "",
    Year: "",
    Genre: "",
    Description: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="nav">
      <Button className="addMovie" onClick={toggle}>
        Add Movie
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add a movie</ModalHeader>
        <ModalBody>
          <form>
            <label>Name</label>
            <input
              required
              name="Name"
              type="text"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>Rating</label>
            <input
              required
              name="Rating"
              type="number"
              max="5"
              min="1"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>Year</label>
            <input
              required
              name="Year"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>Poster</label>
            <input
              required
              name="Poster"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>Trailer</label>
            <input
              required
              name="Trailer"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>Genre</label>
            <input
              required
              name="Genre"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>Description</label>
            <input
              required
              name="Description"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
          className="btnFooter"
            onClick={(e) => {
              handleAdd(newMovie);
              toggle();
              setNewMovie({
                Id: Math.random(),
                Poster: "",
                Rating: 1,
                Name: "",
                Year: "",
                Genre: "",
                Description: "",
              });
            }}
          >
            Save Movie
          </Button>{" "}
          <Button className="btnFooter" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddMovie;