export const getIsSendingSelector = (state) => state.shortUrlReducer.isSending;
export const getShortUrlSelector = (state) => state.shortUrlReducer.shortUrl;
export const getLongUrlSelector = (state) => state.shortUrlReducer.longUrl;
export const getErrorSelector = (state) => state.shortUrlReducer.error;
