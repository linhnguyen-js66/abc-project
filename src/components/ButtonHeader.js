import { Button } from "antd";
import React from "react";
import "@styles/style-header.css";
import clsx from "clsx";
const ButtonHeader = ({ icon, className }) => {
  return (
    <>
      <Button shape="circle" className={clsx(className, "button-header")} icon={icon}/>
    </>
  );
};
export default ButtonHeader;
