import {
  FETCH_SHORT_URL_REQUEST,
  FETCH_SHORT_URL_SUCCESS,
  FETCH_SHORT_URL_FAILURE
} from "./types";

export const fetchShortUrlRequest = () => {
  return {
    type: FETCH_SHORT_URL_REQUEST
  };
};

export const fetchShortUrlSuccess = (data) => {
  return {
    type: FETCH_SHORT_URL_SUCCESS,
    payload: data
  };
};

export const fetchShortUrlFailure = (error) => {
  return {
    type: FETCH_SHORT_URL_FAILURE,
    payload: error
  };
};
