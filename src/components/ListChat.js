import React from "react";
import ItemUser from "@components/ItemUser";
import { DataChat } from "@data-access/data-test";
const ListChat = () => {
  return (
    <>
      {DataChat.map((item, index) => (
        <ItemUser key={index} item={item} />
      ))}
    </>
  );
};
export default ListChat;
