// Import the action types for the image fetching process
import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAIL,
} from "../actions/types";

// Initial state for the image data in the Redux store
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
        loading: true, // Set loading to true since the fetch process has started
        error: null, // Reset any previous errors
      };
    case FETCH_IMAGES_SUCCESS:
      console.log("Images after success:", action.payload); // Log the fetched images
      return {
        ...state,
        loading: false, // Set loading to false as the fetch process is complete
        images: action.payload, // Update images with the fetched images
      };
    case FETCH_IMAGES_FAIL:
      return {
        ...state,
        loading: false, // Set loading to false as the fetch process is complete, despite the error
        error: action.payload, // Update error with the error returned
        images: [], // Clear the images array as fetch has failed
      };
    default:
      return state; // Return the current state if the action type does not match any cases
  }
}
