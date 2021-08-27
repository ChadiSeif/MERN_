import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addContact, editContact } from "../../JS/actions/contact";
import "./EditAddContact.css";

const EditAddContact = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  console.log(newContact);
  const edit = useSelector((state) => state.contactReducer.edit);
  const contactfound = useSelector(
    (state) => state.contactReducer.contactfound
  );

  const dispatch = useDispatch();

  useEffect(() => {
    edit
      ? setNewContact(contactfound)
      : setNewContact({
          name: "",
          email: "",
          phone: "",
        });
  }, [edit, contactfound]);

  return (
    <div className="EditAdd">
      <Form className="Form">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={newContact.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Text className="text-muted">Name is required !</Form.Text>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="email"
            value={newContact.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Email is required !</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="number"
            placeholder="phone"
            name="phone"
            value={newContact.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Link to="/">
          {edit ? (
            <Button
              variant="primary"
              onClick={() =>
                dispatch(editContact(contactfound._id, newContact))
              }
            >
              Edit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => dispatch(addContact(newContact))}
            >
              Add
            </Button>
          )}
        </Link>
      </Form>
    </div>
  );
};

export default EditAddContact;
