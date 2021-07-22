import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import socket from "../../data/socket";

function Clinics() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    socket.on("status", (msg) => {
      console.log("msg", msg);
    });
    socket.on("SignInQueueUpdate", (patient) => {
      setQueue(patient);
    });
  });
  const deletePatient = (uuid) => {
    const newQueue = queue.filter((patient) => patient.uuid !== uuid);
    setQueue(newQueue);
    socket.emit("clinicQueueUpdate", newQueue);
  };
  return (
    <>
      <h1>Clinic</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Arr. Time</th>
            <th>Appt. Time</th>
            <th>Doctor</th>
            <th>Bloodwork</th>
            <th>X-ray</th>
            <th>Referrals</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {queue.map(
            (
              {
                uuid,
                fullName,
                arrTime,
                apptTime,
                doctor,
                bloodwork,
                xRay,
                referrals,
              },
              i
            ) => (
              <tr key={uuid}>
                <td>{i + 1}</td>
                <td>{fullName}</td>
                <td>{arrTime}</td>
                <td>{apptTime}</td>
                <td>
                  <select>
                    <option defaultValue value="choose one">
                      choose one
                    </option>
                    <option value="Dr.A">Dr.A</option>
                    <option value="Dr.B">Dr.B</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option defaultValue value="choose one">
                      choose one
                    </option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    <option value="done">done</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option defaultValue value="choose one">
                      choose one
                    </option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    <option value="done">done</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option defaultValue value="choose one">
                      choose one
                    </option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    <option value="done">done</option>
                  </select>
                </td>

                <td>
                  <button onClick={() => deletePatient(uuid)}>Remove</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Clinics;

// <Dropdown onSelect={handleSelect}>
//   <label htmlFor="doctorName">choose one</label>
//   <Dropdown.Toggle
//     id="dropdown-button-dark-example1 doctorName"
//     variant="secondary"
//     as="select"
//   ></Dropdown.Toggle>
//   <Dropdown.Menu variant="dark">
//     <Dropdown.Item value="Dr.A" as="option">
//       Dr.A
//     </Dropdown.Item>
//     <Dropdown.Item value="Dr.B" as="option">
//       Dr.B
//     </Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>;
