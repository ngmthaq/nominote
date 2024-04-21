import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const RegexPage = () => {
  return (
    <div className={classes.regexPage}>
      <PageHeading>JavaScript Regular Expression</PageHeading>
    </div>
  );
};

export default memo(RegexPage);