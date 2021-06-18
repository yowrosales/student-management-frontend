import * as actionTypes from "./actionTypes";
import API from "../../api/api";

const studentFetchRequest = () => {
  return {
    type: actionTypes.STUDENT_FETCH_REQUEST,
  };
};

const studentFetchFailure = (error) => {
  return {
    type: actionTypes.STUDENT_FETCH_FAILURE,
    error: error.data.details[0],
  };
};

const studentFetchSuccess = (payload) => {
  return {
    type: actionTypes.STUDENT_FETCH_SUCCESS,
    data: payload.students,
  };
};

export const studentListFetch = (params) => {
  return (dispatch) => {
    dispatch(studentFetchRequest());
    API.get("/commonstudents", params)
      .then((response) => {
        if (response.data.students) {
          dispatch(studentFetchSuccess(response.data));
        } else
          dispatch(
            studentFetchFailure({
              data: { details: ["Tutor doesn't have any students"] },
            })
          );
      })
      .catch((error) => {
        dispatch(studentFetchFailure(error.response));
      });
  };
};
