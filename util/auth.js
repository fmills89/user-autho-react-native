import axios from 'axios';

const API_KEY = 'AIzaSyC-eVBA69tzwYI75xlUtmItTa9_LT1TvzI';

// by using async/await we are make sure func overrall returns promise that will
// resolve once request is done - allowing for loading overlay
export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    // argument is object then converted to json by axios
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
