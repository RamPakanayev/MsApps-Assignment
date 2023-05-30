import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAIL,
} from "./types";

export function fetchImagesApi(category = "", page = 1) {
  const url = `http://localhost:5000/api/images?category=${encodeURIComponent(
    category
  )}&page=${page}`;
  return fetch(url);
}

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

export const fetchImages = (category, page) => {
  return (dispatch) => {
    dispatch(fetchImagesStart());

    fetchImagesApi(category, page)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchImagesSuccess(data));  // Pass the full data array to fetchImagesSuccess
      })
      .catch((error) => {
        dispatch(fetchImagesFail(error));
      });
  };
};
