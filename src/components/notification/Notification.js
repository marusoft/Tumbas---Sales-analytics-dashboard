import React from "react";
import { CreateSharp, Notifications } from "@material-ui/icons";
import Follower from "../../components/follower/Follower"
import "./notification.css";

const Notification = () => {
  return (
    <div className="notification">
      <div className="info">
        <Notifications className="notify" />
        <CreateSharp className="create" />
      </div>
      <Follower />
    </div>
  );
};

export default Notification;
