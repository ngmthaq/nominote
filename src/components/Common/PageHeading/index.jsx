import { memo } from "react";
import classes from "./style.module.scss";

const PageHeading = ({ children }) => {
  return (
    <h1 className={classes.pageHeading}>
      <i className="bi bi-house-door-fill"></i>
      <i className="bi bi-chevron-right"></i>
      {children}
    </h1>
  );
};

export default memo(PageHeading);
