import React, { createContext, useState } from "react";

let userData = [
  {
    id: 1,
    username: "Owner",
  },
  {
    id: 2,
    username: "Bobek",
  },
  {
    id: 3,
    username: "Bobik",
  },
  {
    id: 6,
    username: "Bob",
  },
  {
    id: 4,
    username: "Bobika",
  },
];

export const UserContext = createContext();

function UserProvider({ children }) {
  const [data, setData] = useState(userData);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const value = {
    userData: data || [],
    setUserData: setData,
    loggedInUser,
    setLoggedInUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
