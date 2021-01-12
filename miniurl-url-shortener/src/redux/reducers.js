import {
  FETCH_SHORT_URL_REQUEST,
  FETCH_SHORT_URL_SUCCESS,
  FETCH_SHORT_URL_FAILURE
} from "./types";

const initialState = {
  isSending: false,
  shortUrl: "",
  longUrl: "",
  error: ""
};

const shortUrlReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SHORT_URL_REQUEST:
      return {
        ...state,
        isSending: true,
        shortUrl: "",
        longUrl: "",
        error: ""
      };

    case FETCH_SHORT_URL_SUCCESS:
      return {
        ...state,
        isSending: false,
        shortUrl: payload.shortUrl,
        longUrl: payload.longUrl,
        error: ""
      };

    case FETCH_SHORT_URL_FAILURE:
      return {
        ...state,
        isSending: false,
        shortUrl: "",
        longUrl: "",
        error: payload
      };

    default:
      return state;
  }
};

export default shortUrlReducer;
