import React, { createContext, useState } from "react";

let listData = [
  {
    id: "1",
    owner_id: "1",
    title: "One",
    memberList: ["2"],
  },
  {
    id: "2",
    owner_id: "1",
    title: "One",
    memberList: ["1", "3"],
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
