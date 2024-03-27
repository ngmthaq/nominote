import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import RequestNotification from "@/components/Common/RequestNotification";
import classes from "./style.module.scss";

const BaseLayout = () => {
  return (
    <div className={classes.baseLayout}>
      <RequestNotification />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(BaseLayout);
