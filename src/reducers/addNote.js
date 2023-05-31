import { ADD_NOTE, ALEART } from "../action/constant/Type";
import { GET_ALL_NOTE } from "../action/constant/Type";
import { DELETE_NOTE } from "../action/constant/Type";
import { UPDATE_NOTE } from "../action/constant/Type";

const initialState = {
  note: [],
  alert: { msg: "", status: "" },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, note: state.note.concat([action.payload.res]) };
    case GET_ALL_NOTE:
      return { ...state, ...action.payload };

    case DELETE_NOTE:
      return { ...state, note: action.payload.newNotes };
    case UPDATE_NOTE:
      return { ...state, note: action.payload.newNotes };
    case ALEART:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
};

export default reducer;
