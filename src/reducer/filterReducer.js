import {
  CLEAR_FILTER,
  PRIORITY_FILTER,
  SORT_BY,
  TAGS_FILTER,
} from "../constants/filterConstants";

export const filterInitialState = {
  tags: [],
  sortby: "",
  priorities: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case PRIORITY_FILTER:
      return {
        ...state,
        priorities: state.priorities.includes(action.payload)
          ? state.priorities.filter((priority) => priority !== action.payload)
          : [...state.priorities, action.payload],
      };
    case SORT_BY:
      return {...state,sortby: action.payload};
    case TAGS_FILTER:
        return {
            ...state,
            tags: state.tags.includes(action.payload)
              ? state.tags.filter((tag) => tag !== action.payload)
              : [...state.tags, action.payload],
          };
    case CLEAR_FILTER:
      return filterInitialState;
    default:
      return state;
  }
};
