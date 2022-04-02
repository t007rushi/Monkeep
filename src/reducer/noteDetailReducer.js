import {
  SET_TITLE,
  SET_COLOR,
  PIN,
  CLEAR_INPUTS,
} from "../constants/notesConstant";

export const noteDetailReducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_COLOR:
      return { ...state, color: action.payload };
    case PIN:
      return { ...state, ispin: !state.ispin };
    case CLEAR_INPUTS:
      return action.payload;
    default:
      return state;
  }
};
