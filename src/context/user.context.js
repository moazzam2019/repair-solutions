import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  token: "",
  setCurrentToken: () => "",
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setCurrentToken] = useState("");
  const bearerToken = "Bearer " + token;
  const config = { headers: { authorization: bearerToken } };

  const value = { currentUser, setCurrentUser, token, setCurrentToken, config };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
