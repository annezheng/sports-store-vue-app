export const setAuthenticated = (state, token) => {
  state.jwt = token;
  state.authenticated = true;
}
export const clearAuthentication = (state) => {
  state.authenticated = false;
  state.jwt = null;
}

