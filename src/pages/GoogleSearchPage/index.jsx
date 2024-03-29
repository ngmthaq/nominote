import { memo, useEffect } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";
import "./style.scss";

const GoogleSearchPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cse.google.com/cse.js?cx=32ec940d37e1c451f";
    document.body.append(script);
  }, []);

  return (
    <div className={classes.googleSearchPage}>
      <PageHeading>Search</PageHeading>
      <div className={classes.container}>
        <h1 className="text-center mb-3">
          <span style={{ fontWeight: "800", color: "blue" }}>G</span>
          <span style={{ fontWeight: "800", color: "red" }}>o</span>
          <span style={{ fontWeight: "800", color: "orange" }}>o</span>
          <span style={{ fontWeight: "800", color: "blue" }}>g</span>
          <span style={{ fontWeight: "800", color: "green" }}>l</span>
          <span style={{ fontWeight: "800", color: "red" }}>e</span>
        </h1>
        <div className="gcse-search"></div>
      </div>
    </div>
  );
};

export default memo(GoogleSearchPage);
