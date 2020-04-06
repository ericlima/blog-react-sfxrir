import jsonPlaceholder from '../api/jsonplaceholder'

export const fetchPosts = () => {
  return {
    type: 'FETCH_POSTS'
  }
}