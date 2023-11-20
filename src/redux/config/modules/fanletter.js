import fakeData from "shared/fakeData.json";

const COMPLETE = "fanletter/COMPLETE";
const DELETE = "fanletter/DELETE";
const UPDATE = "fanletter/UPDATE";

export const completeFanletter = (payload) => {
  return { type: COMPLETE, payload: payload };
};
export const deleteFanletter = (payload) => {
  return { type: DELETE, payload: payload };
};
export const updateFanletter = (payload) => {
  return { type: UPDATE, payload: payload };
};

const initialState = fakeData;

const fanletter = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE:
      return [action.payload, ...state];
    case DELETE:
      return state.filter((fanletter) => fanletter.id !== action.payload);
    case UPDATE:
      return state.map((fanletter) => {
        if (fanletter.id === action.payload.id)
          return { ...fanletter, content: action.payload.updateLetter };
        return fanletter;
      });
    default:
      return state;
  }
};

export default fanletter;
