import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const StringHelperPage = () => {
  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>String Helper</PageHeading>
    </div>
  );
};

export default memo(StringHelperPage);
