import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function CalorieModal({ show, setShow, profile }) {
  const API = process.env.REACT_APP_API_URL;
  const [newProfile, setNewProfile] = useState({ 
    cal: 0,
    fat: 0,
    carb: 0,
    protein: 0,
  });

  const updateProfile = (updatedProfile) => {
    let newCal = Number(profile.cal) + Number(newProfile.cal)
    let newFat = Number(profile.fat) + Number(newProfile.fat)
    let newCarb = Number(profile.carb) + Number(newProfile.carb)
    let newProtein = Number(profile.protein) + Number(newProfile.protein)

    axios.put(`${API}/profiles/${profile.uid}`, 
    {
        uid: profile.uid,
        name: profile.name,
        cal: newCal,
        fat: newFat,
        carb: newCarb,
        protein: newProtein,
        recipes: profile.recipes,
      }).then(() => {
      console.log("update sent");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(newProfile);
    handleClose();
    window.location.reload();
  };

  const handleTextChange = (event) => {
    setNewProfile({ ...newProfile, [event.target.id]: event.target.value });
  };

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add To Tracker</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Calorie</Form.Label>
          <Form.Control
            className="mb-2"
            size="md"
            type="number"
            id="cal"
            value={newProfile.cal}
            onChange={handleTextChange}
          />
          <Form.Label>Fat</Form.Label>
          <Form.Control
            className="mb-2"
            size="md"
            type="number"
            id="fat"
            value={newProfile.fat}
            onChange={handleTextChange}
          />
          <Form.Label>Carb</Form.Label>
          <Form.Control
            className="mb-2"
            size="md"
            type="carb"
            id="carb"
            value={newProfile.carb}
            onChange={handleTextChange}
          />
          <Form.Label>Protein</Form.Label>
          <Form.Control
            className="mb-2"
            size="md"
            type="number"
            id="protein"
            value={newProfile.protein}
            onChange={handleTextChange}
          />
          <div className="d-flex align-items-center justify-content-around">
          <Button type="submit" variant="success">
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CalorieModal;
