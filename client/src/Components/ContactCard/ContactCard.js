import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  getOneContact,
  toggleTrue,
} from "../../JS/actions/contact";
import { Link } from "react-router-dom";
import "./ContactCard.css";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="personCard">
        <Card.Img
          variant="top"
          src="https://www.kindpng.com/picc/m/173-1731325_person-icon-png-transparent-png.png"
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>{contact.email}</Card.Text>
          <Card.Text>{contact.phone}</Card.Text>
          <Link to={`/Editcontact/${contact._id}`}>
            <Button
              variant="success"
              onClick={() => {
                dispatch(toggleTrue());
                dispatch(getOneContact(contact._id));
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteContact(contact._id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
