import { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: token => {},
  logout: () => {},
});

// responseible for managing the actual auth context state and used as wrapper around comp that want
// to interact w/ context
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  // triggered when user does login/signup successfully
  // will receive token
  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    // not not - converts truthly or falsy value into true or false
    isAuthenticated: !!authToken,
    // exposed thru context
    authenticate: authenticate,
    logout: logout,
  };

  // exposing auth context to any comp that wants to work w/ it
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
