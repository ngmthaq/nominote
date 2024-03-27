import React, { memo } from "react";
import classes from "./style.module.scss";

const RequestNotification = () => {
  return <div className={classes.requestNotification}></div>;
};

export default memo(RequestNotification);
