// client\src\redux\reducers\imagesReducer.js
import { FETCH_IMAGES_START, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAIL } from '../actions/types';

const initialState = {
  images: [],
  loading: false,
  error: null,
};

function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload
      };
    case FETCH_IMAGES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default imagesReducer;
