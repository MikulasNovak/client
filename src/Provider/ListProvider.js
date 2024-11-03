import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";
let listData = [
  {
    id: 1,
    owner_id: 1,
    title: "One",
    archived: false,
    memberList: [2, 3],
  },
  {
    id: 2,
    owner_id: 2,
    title: "Two",
    archived: false,
    memberList: [3],
  },
];

export const ListContext = createContext();

function ListProvider({ children }) {
  const [data, setData] = useState(listData);
  const [listMembers, setListMembers] = useState([]); // New state to hold filtered members
  const { userData, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    handleUserLoad(1); //CHANGABLE PROP
  }, [data]);

  function handleUserLoad(list_id) {
    const list = data.find((list) => list.id === list_id);
    if (!list) {
      console.warn(`List with id ${list_id} not found.`);
      return;
    }
    const filteredUsers = userData.filter((user) =>
      list.memberList.includes(user.id)
    );
    const owner = userData.find((user) => user.id === list.owner_id);
    if (owner && !filteredUsers.some((user) => user.id === owner.id)) {
      filteredUsers.push(owner);
    }
    setListMembers(filteredUsers);
  }

  function handleKick(list_id, user_id) {
    console.log("Attempting to kick user:", user_id, "from list:", list_id);
    console.log("Logged In User:", loggedInUser);

    setData((current) =>
      current.map((list) => {
        if (list.id === list_id) {
          if (Number(list.owner_id) === Number(loggedInUser)) {
            if (Number(user_id) !== Number(loggedInUser)) {
              return {
                ...list,
                memberList: list.memberList.filter((id) => id !== user_id),
              };
            } else {
              console.log("Cannot kick the owner (self-kick attempt)");
            }
          } else {
            console.log("Failed condition: User is not the owner");
          }
        }
        return list;
      })
    );
  }

  function handleAddMember(list_id, user_id) {
    setData((current) => {
      return current.map((list) => {
        if (
          list.id === list_id &&
          list.owner_id === loggedInUser &&
          !list.memberList.includes(user_id)
        ) {
          return {
            ...list,
            memberList: [...list.memberList, user_id],
          };
        } else {
          console.log(`Conditions not met for list ${list.id}:`);
          console.log(
            `  Owner ID: ${list.owner_id}, Logged In User: ${loggedInUser}, User ID: ${user_id}`
          );
        }
        return list;
      });
    });
  }
  function handleLeave(list_id, user_id) {
    setData((current) =>
      current.map((list) => {
        if (list.id === list_id && list.memberList.includes(user_id)) {
          return {
            ...list,
            memberList: list.memberList.filter((id) => id !== user_id),
          };
        } else {
          console.log(`User is not part of the list: ${list_id}`);
        }
        return list;
      })
    );
  }
  function handleEditListName(list_id, newTitle) {
    setData((current) =>
      current.map((list) =>
        list.id === list_id ? { ...list, title: newTitle } : list
      )
    );
  }

  function handleArchive(list_id) {
    setData((current) =>
      current.map((list) =>
        list.id === list_id ? { ...list, archived: !list.archived } : list
      )
    );
  }

  const value = {
    listData: data || [],
    setData,
    listMembers, // Expose listMembers to other components
    handlerMap: {
      handleArchive,
      handleAddMember,
      handleLeave,
      handleKick,
      handleEditListName,
    },
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export default ListProvider;
