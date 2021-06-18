import * as actionTypes from "../actions/actionTypes";
const initialState = {
  list: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STUDENT_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        list: [],
      };

    case actionTypes.STUDENT_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        list: [],
      };
    case actionTypes.STUDENT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
