import jsonPlaceholder from '../api/jsonplaceholder'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch ({
    type: 'FETCH_POSTS',
    payload: promise
  })
}

export const fetchUser = (userId) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch ({
    type: 'FETCH_USER',
    payload: promise
  })
}