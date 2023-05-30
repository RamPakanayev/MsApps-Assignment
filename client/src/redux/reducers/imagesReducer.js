import { FETCH_IMAGES_START, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAIL } from "../actions/types";

const initialState = {
  images: [],
  loading: false,
  error: null,
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_IMAGES_SUCCESS:
      console.log('Images after success:', action.payload);  // Corrected this line
      return {
        ...state,
        loading: false,
        images: action.payload,  // Corrected this line
      };
    case FETCH_IMAGES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        images: [], // Also update 'images' here
      };
    default:
      return state;
  }
}
