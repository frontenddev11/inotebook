import { ADD_NOTE } from "./constant/Type";
import { GET_ALL_NOTE } from "./constant/Type";
import { DELETE_NOTE } from "./constant/Type";
import { UPDATE_NOTE } from "./constant/Type";
import { ALEART } from "./constant/Type";

export const addNotes = (payload) => {
  return {
    type: ADD_NOTE,
    payload: payload,
  };
};

export const getAllNote = (note) => {
  return {
    type: GET_ALL_NOTE,
    payload: note,
  };
};

export const deleteNotes = (note) =>{
return{

  type: DELETE_NOTE,
  payload : note
}

}
export const updateNotes = (note) =>{
  return{
    type: UPDATE_NOTE,
    payload : note
  }
}

export const alert = (msg) =>{
  return{
    type: ALEART,
    payload : msg
  }
}
