import axios from 'axios';

const API_KEY = 'AIzaSyC-eVBA69tzwYI75xlUtmItTa9_LT1TvzI';

// shared function that has main logic
async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

// by using async/await we are make sure func overrall returns promise that will
// resolve once request is done - allowing for loading overlay
export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
