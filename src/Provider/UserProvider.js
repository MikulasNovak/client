import React, { createContext, useContext, useState, useEffect } from "react";
import { ListContext } from "./ListProvider";

let userData = [
  {
    id: 1,
    username: "Bob boss",
  },
  {
    id: 2,
    username: "Bobek",
  },
  {
    id: 3,
    username: "Bobik",
  },
];

export const UserContext = createContext();

function UserProvider({ children }) {
  const { listData, setListData } = useContext(ListContext);
  const [data, setData] = useState(userData);
  const [loggedInUser, setLoggedInUser] = useState(1);

  useEffect(() => {
    handleLoad(1); //CHANGABLE PROP
  }, [listData]);

  function handleLoad(list_id) {
    setData(() => {
      const list = listData.find((list) => list.id === list_id);
      /*
      if (!list) {
        console.warn(`List with id ${list_id} not found.`);
        return [];
      }
      */
      const filteredUsers = userData.filter((user) =>
        list.memberList.includes(user.id)
      );
      const owner = userData.find((user) => user.id === list.owner_id);
      if (owner && !filteredUsers.some((user) => user.id === owner.id)) {
        filteredUsers.push(owner);
      }
      return filteredUsers;
    });
  }
  function handleKick(list_id, user_id) {
    setListData((current) =>
      current.map((list) => {
        if (list.id === list_id) {
          if (list.owner_id == loggedInUser) {
            return {
              ...list,
              memberList: list.memberList.filter((id) => id !== user_id),
            };
          } else {
            console.log("user is not owner");
          }
        }
        console.log("unable to kick owner");
        return list;
      })
    );
  }
  function handleAddMember(list_id, user_id) {
    

  }
  /*
  function handleLeave(list_id, user_id) {
    //USER ID = ID Of logged user -> take from context
    setListData((current) =>
      current.map((list) => {
        if (list.id === list_id) {
          return {
            ...list,
            memberList: list.memberList.filter((id) => id !== user_id),
          };
        }
        console.log(list);
        return list;
      })
    );
  }
*/
  const value = {
    data: data || [],
    loggedInUser,
    setLoggedInUser,
    handlerMap: {
      handleKick,
      //handleLeave,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
