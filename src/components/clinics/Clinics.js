import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import socket from "../../data/socket";

function Clinics() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    socket.on("status", (msg) => {
      console.log("msg", msg);
    });
    socket.on("updatedQueue", (patient) => {
      setQueue(patient);
    });
  });

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
                <td>{doctor}</td>
                <td>{bloodwork}</td>
                <td>{xRay}</td>
                <td>{referrals}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Clinics;
