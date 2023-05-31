// client\src\redux\actions\index.js
// Import action types
import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAIL,
} from "./types";

// Function fetchImagesApi takes category and page as parameters,
// constructs a URL, and fetches images data from the server.
export function fetchImagesApi(category = "", page = 1) {
  const url = `http://localhost:5000/api/images?category=${encodeURIComponent(
    category
  )}&page=${page}`;
  return fetch(url);
}

// The following functions are action creators for our redux store.
// They return actions of different types to represent different stages
// of the fetch request.
export const fetchImagesStart = () => ({
  type: FETCH_IMAGES_START,
});

export const fetchImagesSuccess = (images) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images,
});

export const fetchImagesFail = (error) => ({
  type: FETCH_IMAGES_FAIL,
  payload: error,
});

// The main function fetchImages is a redux thunk action creator.
// It dispatches fetchImagesStart action initially,
// then it calls fetchImagesApi to get the images data from server,
// if the fetch is successful, it dispatches fetchImagesSuccess action with the received data,
// if the fetch fails, it dispatches fetchImagesFail action with the error.
export const fetchImages = (category, page) => {
  return (dispatch) => {
    dispatch(fetchImagesStart());

    fetchImagesApi(category, page)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          dispatch(fetchImagesSuccess(data));
        } else {
          dispatch(
            fetchImagesFail(
              new Error("No images found for this category or page number.")
            )
          );
        }
      })
      .catch((error) => {
        dispatch(fetchImagesFail(error));
      });
  };
};
