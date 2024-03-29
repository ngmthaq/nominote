import { memo } from "react";
import classes from "./style.module.scss";

const NotFoundPage = () => {
  return (
    <div className={classes.notFoundPage}>
      <div>
        <h1>404</h1>
        <h2>|</h2>
        <h5>Page Not Found</h5>
      </div>
      <p>Sorry, we cannot found any page you are looking for!</p>
      <a href="/">Back to homepage</a>
    </div>
  );
};

export default memo(NotFoundPage);
