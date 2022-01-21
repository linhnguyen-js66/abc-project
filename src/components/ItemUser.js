import React from "react";
import { Avatar, Typography } from "antd";
import { AntDesignOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import "@styles/style-listuser.css";
import clsx from "clsx";
const sizeAvatar = { xs: 16, sm: 24, md: 36, lg: 42, xl: 60, xxl: 64 };
const ItemUser = ({ key, item }) => {
  return (
    <>
      <div className="contain" key={key}>
        <div className="contain-ava">
          <Avatar
            size={sizeAvatar}
            icon={<AntDesignOutlined />}
            className="avatar"
          />
          {item?.isOnline && (
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              className="icon-online"
            />
          )}
        </div>
        <div className="title-content">
          <Typography className="name-user">{item?.nameFriend}</Typography>
          <div
            className={clsx(
              item?.lastuser === 1
                ? item?.seen
                  ? "message"
                  : "message-unseen"
                : "message"
            )}
          >
            {item?.lastuser === 0 ? "Bạn:" : ""} {item?.titleChat}
          </div>
        </div>
        <div className="ava-friend">
          <Avatar size={20} icon={<AntDesignOutlined />} className="avatar" />
        </div>
      </div>
    </>
  );
};
export default ItemUser;
