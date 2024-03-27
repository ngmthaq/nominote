import React, { memo, useEffect } from "react";
import { eventBus } from "@/services/eventBus";
import { EVENT_BUS } from "@/configs/app";
import classes from "./style.module.scss";

const HomePage = () => {
  const handleServiceWorkerUpdated = () => {
    alert("Reload required");
  };

  useEffect(() => {
    eventBus.on(EVENT_BUS.serviceWorkerUpdated, handleServiceWorkerUpdated);
    return () => eventBus.off(EVENT_BUS.serviceWorkerUpdated, handleServiceWorkerUpdated);
  });

  return <div className={classes.homePage}>HomePage</div>;
};

export default memo(HomePage);
