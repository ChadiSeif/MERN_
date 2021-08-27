import axios from "axios";
import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCC,
  GET_ONECONTACT_FAIL,
  GET_ONECONTACT_LOAD,
  GET_ONECONTACT_SUCC,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_SUCC,
} from "../actionsType/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });

  try {
    let result = await axios.get("/api/contacts");
    console.log(result.data.contactfound);
    dispatch({ type: GET_CONTACTS_SUCC, payload: result.data.contactfound });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
  }
};

//delete contact
export const deleteContact = (contactId) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${contactId}`);
    dispatch({ type: DELETE_CONTACT_SUCCESS });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: DELETE_CONTACT_FAIL, payload: error.response.data });
  }
};

//Add contact
export const addContact = (newcontact) => async (dispatch) => {
  try {
    await axios.post("/api/contacts", newcontact);
    dispatch({ type: ADD_CONTACT_SUCCESS });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data });
  }
};

//////
export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};

export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};

///GET contact to update
export const getOneContact = (contactId) => async (dispatch) => {
  dispatch({ type: GET_ONECONTACT_LOAD });
  try {
    let resultone = await axios.get(`/api/contacts/${contactId}`);
    dispatch({
      type: GET_ONECONTACT_SUCC,
      payload: resultone.data.contactfound,
    });
  } catch (error) {
    dispatch({ type: GET_ONECONTACT_FAIL, payload: error });
  }
};

//EDIT CONTACT

export const editContact = (contactid, contactupdated) => async (dispatch) => {
  try {
    await axios.put(`/api/contacts/${contactid}`, contactupdated);
    dispatch({ type: UPDATE_CONTACT_SUCC });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: UPDATE_CONTACT_FAIL, payload: error.response.data });
  }
};

export default getContacts;
