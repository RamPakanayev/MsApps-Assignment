import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAIL,
} from "../actions/types";


const initialState = {
  images: [], // Array to hold the fetched images
  loading: false, // Flag to indicate if the fetching process is ongoing
  error: null, // To hold any error that occurs during the fetch process
};

// The imageReducer handles actions related to the image fetching process and updates the state accordingly
export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_START:
      return {
        ...state,
        loading: true,
        error: null, // Reset any previous errors
      };
    case FETCH_IMAGES_SUCCESS:
     
      return {
        ...state,
        loading: false, 
        images: action.payload, // Update images with the fetched images
      };
    case FETCH_IMAGES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload, 
        images: [], // Clear the images array as fetch has failed
      };
    default:
      return state;
  }
}
