import {
  fetchShortUrlRequest,
  fetchShortUrlSuccess,
  fetchShortUrlFailure
} from "./actions";

export const fetchShortUrlThunk = (longUrl) => async (dispatch) => {
  try {
    dispatch(fetchShortUrlRequest());

    const apiUrl = "http://localhost:5000/api/";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ longUrl })
    });

    const data = await response.json();

    if (data.shortUrl) {
      dispatch(fetchShortUrlSuccess(data));
    } else {
      dispatch(fetchShortUrlFailure(data.error));
    }
  } catch (e) {
    dispatch(fetchShortUrlFailure("Server is not running!"));
    // dispatch(displayErrorAlertThunk(e));
  }
};

export const displayErrorAlertThunk = (errTxt) => () => {
  alert(errTxt);
};
