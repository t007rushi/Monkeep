import {
  SET_TITLE,
  SET_COLOR,
  PIN,
  CLEAR_INPUTS,
  SET_LABEL,
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
    case SET_LABEL:
      return {
        ...state,
        labels: state.labels.find((label) => label === action.payload)
          ? state.label
          : [...state.labels, action.payload],
      };
    default:
      return state;
  }
};
