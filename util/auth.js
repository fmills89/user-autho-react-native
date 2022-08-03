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

  console.log(response.data);
}

// by using async/await we are make sure func overrall returns promise that will
// resolve once request is done - allowing for loading overlay
export async function createUser(email, password) {
  await authenticate('signup', email, password);
}

export async function login(email, password) {
  await authenticate('signInWithPassword', email, password);
}
