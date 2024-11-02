import React, { createContext, useContext, useState, useEffect } from "react";
import { ListContext } from "./ListProvider";

let userData = [
  {
    id: "1",
    username: "Bob",
  },
  {
    id: "2",
    username: "Bobek",
  },
  {
    id: "3",
    username: "Bobik",
  },
];

export const UserContext = createContext();

function UserProvider({ children }) {
  const { listData, setListData } = useContext(ListContext);
  const [data, setData] = useState(userData);

  useEffect(() => {
    handleLoad(1); //CHANGABLE PROP
  }, [listData]);

  function handleLoad(list_id) {
    setData(() => {
      const filteredUsers = userData.filter((user) =>
        listData[list_id].memberList.includes(user.id)
      );

      const owner = userData.find(
        (user) => user.id === listData[list_id].owner_id
      );
      if (owner && !filteredUsers.some((user) => user.id === owner.id)) {
        filteredUsers.push(owner);
      }

      return filteredUsers;
    });
  }

  function handleKick(list_id, user_id) {}
  /*
  function handleAdd() {}
  

  function handleCreate(title) {
    setData((current) => {
      current[0].itemList.push({
        id: Math.random(),
        title: title,
        resolved: false,
      });
      console.log(...current[0].itemList);
      return { ...current };
    });
  }
*/

  const value = {
    data: data || [],
    handlerMap: {
      handleKick,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
