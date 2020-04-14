import _ from "lodash";

import jsonPlaceholder from "../api/jsonplaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

//export const fetchUser = userId => async dispatch => {
// const response = await jsonPlaceholder.get(`/users/${userId}`);
//  dispatch({
//    type: "FETCH_USER",
//    payload: response.data
//  });
//};

export const fetchUser = function(userId) {
  return _.memoize(async function(dispatch) {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
      type: "FETCH_USER",
      payload: response.data
    });
  });
};
