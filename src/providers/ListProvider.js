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
  {
    id: 3,
    owner_id: 1,
    title: "Three",
    archived: true,
    memberList: [3, 2],
  },
];

export const ListContext = createContext();

function ListProvider({ children }) {
  const [originalData, setOriginalData] = useState(listData);
  const [filteredData, setFilteredData] = useState(listData);
  const [filterOption, setFilterOption] = useState("all"); // New filter state
  const [listId, setListId] = useState();
  const [filteredUsers, setFilteredUsers] = useState([]); // New state to hold filtered members
  const { userData, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    handleUserLoad(listId);
  }, [listId, originalData]);

  useEffect(() => {
    handleLoad(loggedInUser, originalData, filterOption);
  }, [listId, loggedInUser, filterOption]);

  function handleUserLoad(list_id) {
    const list = originalData.find((list) => list.id === list_id);

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
    //console.log(filteredUsers);
    setFilteredUsers(filteredUsers); // Update the state
  }

  function handleLoad(user_id, data, option) {
    const lists = data.filter(
      (list) => list.owner_id === user_id || list.memberList.includes(user_id)
    );
    //console.log(filterOption);
    const filteredLists = lists.filter((list) => {
      if (option === "archived") return list.archived;
      if (option === "unarchived") return !list.archived;
      return true;
    });

    setFilteredData(filteredLists); // Update state
  }

  function handleKick(list_id, user_id) {
    setOriginalData((current) =>
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
    setOriginalData((current) => {
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
    setOriginalData((current) =>
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
    setOriginalData((current) =>
      current.map((list) =>
        list.id === list_id ? { ...list, title: newTitle } : list
      )
    );
  }
  function handleCreate(title) {
    const newList = {
      id: Number(Math.random()),
      owner_id: loggedInUser,
      title: title,
      archived: false,
      memberList: [],
    };

    setOriginalData((current) => {
      const updatedData = [...current, newList];
      handleLoad(loggedInUser, updatedData);
      return updatedData;
    });
  }

  function handleDelete(list_id) {
    const list = originalData.find((list) => list.id === list_id);
    if (list.owner_id === loggedInUser) {
      setFilteredData((current) =>
        current.filter((list) => list.id !== list_id)
      );
    } else {
      console.log("User is not owner of the list");
    }
  }

  function handleArchive(list_id) {
    setFilteredData((current) =>
      current.map((list) =>
        list.id === list_id ? { ...list, archived: !list.archived } : list
      )
    );
  }

  const value = {
    listData: originalData || [],
    listDataFiltered: filteredData,
    userDataFiltered: filteredUsers,
    setListId,
    listId,
    setFilterOption,
    filterOption,
    handlerMap: {
      handleArchive,
      handleLoad,
      handleAddMember,
      handleLeave,
      handleKick,
      handleCreate,
      handleDelete,
      handleEditListName,
    },
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export default ListProvider;
