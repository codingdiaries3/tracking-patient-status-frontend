import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Clinics from "../clinics/Clinics";
import Patients from "../patients/Patients";
function Navi() {
  return (
    <>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="./clinic">
                Clinic
              </Nav.Link>
              <Nav.Link as={Link} to="./patient">
                Patient
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/clinic">
            <Clinics />
          </Route>
          <Route path="/patient">
            <Patients />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Navi;
