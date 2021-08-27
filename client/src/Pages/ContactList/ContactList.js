import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactCard from "../../Components/ContactCard/ContactCard";
import getContacts from "../../JS/actions/contact";

import "./ContactList.css";

const ContactList = () => {
  const dispatch = useDispatch();

  const listcontacts = useSelector(
    (state) => state.contactReducer.listContacts
  );
  const load = useSelector((state) => state.contactReducer.load);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return load ? (
    <img
      src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-10.jpg"
      alt="spinner"
    />
  ) : (
    <div className="main">
      {listcontacts.map((contact) => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
  );
};

export default ContactList;
