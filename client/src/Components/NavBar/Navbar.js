import React from "react";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFalse } from "../../JS/actions/contact";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <>
        <Link exact to="/">
          <Button variant="primary" size="lg">
            List of contacts
          </Button>
        </Link>
        <Link to="/addContact">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => dispatch(toggleFalse())}
          >
            Add contact
          </Button>
        </Link>
      </>
    </div>
  );
};

export default Navbar;
