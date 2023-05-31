// thunk (NEXT TASK)
// axios vs fetch
// redux-toolkit (NEXT TASK)
// folder | file | naming-conventions
// .then || await

const BASE_URL = "http://localhost:5000/api";

const LOG_IN = `${BASE_URL}/auth/login`;
const SIGN_UP = `${BASE_URL}/auth/createuser`;
const GET_NOTES = `${BASE_URL}/notes/fetchallnotes`;
const ADD_NOTES = `${BASE_URL}/notes/addnote`;
const DELETE_NOTES = `${BASE_URL}/notes/deletenote/`;
const UPDATE_NOTES = `${BASE_URL}/notes/updatenote/`;
const login = async (email, password) => {
  const response = await fetch(LOG_IN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  return await response.json();
};

const signup = async (name, email, password) => {
  const response = await fetch(SIGN_UP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return await response.json();
};

const getNotes = async () => {
  const response = await fetch(GET_NOTES, {
    method: "GET",
    headers: {
      "content-type": "application-JSON",
      "auth-token": sessionStorage.getItem("token"),
    },
  });
  return await response.json();
};
const addNote = async (title, description, tag) => {
  const response = await fetch(ADD_NOTES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("token"),
    },
    body: JSON.stringify({ title, description, tag }),
  });

  return await response.json();
};

const deleteNote = async (id) => {
  const response = await fetch(` ${DELETE_NOTES}${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("token"),
    },
  });
  return await response.json();
};
const updateNotes = async (id, title, description, tag) => {
  const response = await fetch(`${UPDATE_NOTES}${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("token"),
    },

    body: JSON.stringify({ title, description, tag }),
  });
  return await response.json();
};
export default { login, signup, getNotes, addNote, deleteNote, updateNotes };
