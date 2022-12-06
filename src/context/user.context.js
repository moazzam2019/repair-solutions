import { createContext, useEffect, useState } from "react";

const getInitialUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : [];
};
const getInitialtoken = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
};

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  localStorage: null,
  setLocalStorageData: () => {},
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
  console.log(localStorage.getItem("user"));

  //   console.log(newToken);
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
