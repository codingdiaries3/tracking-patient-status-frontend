import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Forms from "../form/Forms";
import socket from "../../data/socket";

function Patients() {
  const [queue, setQueue] = useState([]);
  useEffect(() => {
    socket.emit("queue", queue);
  }, [queue]);
  return (
    <>
      <h1>Patients</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Arr Time</th>
            <th>Appt Time</th>
          </tr>
        </thead>
        <tbody>
          {queue.map(({ uuid, fullName, arrTime, apptTime }, i) => (
            <tr key={uuid}>
              <td>{i + 1}</td>
              <td>{fullName}</td>
              <td>{arrTime}</td>
              <td>{apptTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Forms queue={setQueue} />
    </>
  );
}

export default Patients;
