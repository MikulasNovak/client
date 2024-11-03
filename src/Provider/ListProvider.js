import React, { createContext, useState } from "react";

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

  const value = {
    listData: data || [],
    setListData: setData,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export default ListProvider;
