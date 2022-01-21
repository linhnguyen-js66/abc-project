import React from "react";
import { Input } from "antd";
import "@styles/style-header.css";
import {SearchOutlined} from "@ant-design/icons";
const SearchInput = ({ placeHolder }) => {
  return (
    <>
      <div className="ctn-input">
        <SearchOutlined/>
        <Input placeholder={placeHolder} className="input-header"/>
      </div>
    </>
  );
};
export default SearchInput;
