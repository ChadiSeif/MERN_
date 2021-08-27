import {
  ADD_CONTACT_FAIL,
  DELETE_CONTACT_FAIL,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCC,
  GET_ONECONTACT_FAIL,
  GET_ONECONTACT_LOAD,
  GET_ONECONTACT_SUCC,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
  UPDATE_CONTACT_FAIL,
} from "../actionsType/contact";

const initstate = {
  listContacts: [],
  load: false,
  errors: null,
  edit: false,
  contactfound: "",
  msg: "",
};

const contactReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, load: true };
    case GET_CONTACTS_SUCC:
      return { ...state, load: false, listContacts: payload };
    case GET_CONTACTS_FAIL:
      return { ...state, load: false, errors: payload };
    case DELETE_CONTACT_FAIL:
      return { ...state, errors: payload };
    case ADD_CONTACT_FAIL:
      return { ...state, errors: payload };
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };
    case GET_ONECONTACT_LOAD:
      return { ...state, load: true };
    case GET_ONECONTACT_SUCC:
      return { ...state, load: false, contactfound: payload };
    case GET_ONECONTACT_FAIL:
      return { ...state, load: false, error: payload };
    case UPDATE_CONTACT_FAIL:
      return { ...state, msg: payload.msg };

    default:
      return state;
  }
};

export default contactReducer;
