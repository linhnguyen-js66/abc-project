import { Avatar, Typography } from "antd";
import React from "react";
import {
  AntDesignOutlined,
  EllipsisOutlined,
  VideoCameraAddOutlined,
  EditOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import "@styles/style-header.css";
import SearchInput from "@components/SearchInput";
import ButtonHeader from "@components/ButtonHeader";
const sizeAvatar = { xs: 10, sm: 16, md: 24, lg: 32, xl: 36, xxl: 48 };
export const HeaderList = () => {
  return (
    <>
      <div className="contain-avatar">
        <Avatar
          size={sizeAvatar}
          icon={<AntDesignOutlined />}
          className="avatar"
        />
        <Typography className="title-header">Chat</Typography>
        <div className="flex-grow" />
        <ButtonHeader
          className="btn-ava"
          icon={<EllipsisOutlined className="icon-header" />}
        />
        <ButtonHeader
          className="btn-ava"
          icon={<VideoCameraAddOutlined className="icon-header" />}
        />
        <ButtonHeader
          className="btn-ava"
          icon={<EditOutlined className="icon-header" />}
        />
      </div>
      <div className="search-input">
        <SearchInput placeHolder="Tìm kiếm trên Messenger" />
      </div>
    </>
  );
};
export const HeaderChat = () => {
  return (
    <>
      <div className="contain-avatar">
        <Avatar
          size={sizeAvatar}
          icon={<AntDesignOutlined />}
          className="avatar"
        />
        <div className="ctn-user">
          <Typography className="title-chat">Nguyễn Hà Linh</Typography>
          <div className="active">Hoạt động 7 phút trước</div>
        </div>

        <div className="flex-grow" />
        <ButtonHeader
          className="btn-ava"
          icon={<PhoneFilled className="icon-header" />}
        />
        <ButtonHeader
          className="btn-ava"
          icon={<VideoCameraAddOutlined className="icon-header" />}
        />
        <ButtonHeader
          className="btn-ava"
          icon={<EllipsisOutlined className="icon-header" />}
        />
      </div>
    </>
  );
};
