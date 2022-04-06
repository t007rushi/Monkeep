import {
  SET_TITLE,
  SET_COLOR,
  PIN,
  CLEAR_INPUTS,
  ADD_LABEL,
  SET_PRIORITY,
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
    case ADD_LABEL:
      const updatedLabel = state.labels.find(
        (label) => label === action.payload
      )
        ? state.labels.filter((label) => label !== action.payload)
        : [...state.labels, action.payload];
      return {
        ...state,
        labels: updatedLabel,
      };
      case SET_PRIORITY:
        return{...state, priority: action.payload};
    default:
      return state;
  }
};
