import { createContext, useEffect, useState } from "react";

const getInitialUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : [];
};
const getInitialtoken = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
};
// the actual values that we want to access

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  token: "",
  setCurrentToken: () => "",
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getInitialUser);
  const [token, setCurrentToken] = useState(getInitialtoken);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  const bearerToken = "Bearer " + token;
  const config = { headers: { authorization: bearerToken } };

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setCurrentToken,
    config,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// children are actually the components that are wrapped between this user provider or context
