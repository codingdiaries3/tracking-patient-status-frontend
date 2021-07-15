import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
/**Helper functions */
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

/**Date variables */
const date = new Date();
const hour = date.getHours();
const mins = date.getMinutes();

function Forms({ queue }) {
  const [patient, setPatient] = useState({
    fullName: "",
    arrTime: "",
    apptTime: "",
    uuid: "",
  });

  const checkin = (e) => {
    e.preventDefault();
    queue((prevState) => [...prevState, patient]);
    setPatient({
      fullName: "",
      arrTime: "",
      apptTime: "",
      uuid: "",
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
      arrTime: `${hour}:${mins}`,
      uuid: uuidv4(),
    });
  };

  return (
    <>
      <Form onSubmit={checkin}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="fullName"
              value={patient.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="apptTime"
              value={patient.apptTime}
              onChange={handleChange}
              placeholder="Appt Time"
              required
            />
          </Col>
        </Row>
        <Button type="submit" variant="secondary">
          Check In
        </Button>
      </Form>
    </>
  );
}

export default Forms;
