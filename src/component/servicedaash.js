// Sample AddEvent Component
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    date: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const submitEvent = async (e) => {
    e.preventDefault();
    // API call to add event
    const response = await fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    });
    if (response.ok) {
      alert("Event Added Successfully");
    }
  };

  return (
    <Form onSubmit={submitEvent}>
      <Form.Group controlId="formEventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          name="eventName"
          value={eventDetails.eventName}
          onChange={handleInputChange}
          placeholder="Enter event name"
        />
      </Form.Group>

      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={eventDetails.date}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={eventDetails.location}
          onChange={handleInputChange}
          placeholder="Enter event location"
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={eventDetails.description}
          onChange={handleInputChange}
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddEvent;
