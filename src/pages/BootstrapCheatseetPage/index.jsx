import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const BootstrapCheatseetPage = () => {
  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>Bootstrap Cheatsheet</PageHeading>
      <div className={classes.container} style={{ height: "760px", padding: 0 }}>
        <iframe src="https://getbootstrap.com/docs/5.0/examples/cheatsheet/" width={"100%"} height={"760px"}></iframe>
      </div>
    </div>
  );
};

export default memo(BootstrapCheatseetPage);
