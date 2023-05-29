// client\src\redux\actions\index.js
import axios from 'axios';
import { FETCH_IMAGES_START, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAIL } from './types';

export const fetchImages = () => {
  return dispatch => {
    dispatch({ type: FETCH_IMAGES_START });

    axios.get('http://localhost:5000/api/images')
      .then(res => {
        dispatch({ type: FETCH_IMAGES_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_IMAGES_FAIL, payload: err.message });
      });
  };
};
