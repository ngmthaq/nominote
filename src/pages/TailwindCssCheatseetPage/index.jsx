import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const TailwindCssCheatseetPage = () => {
  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>Lorem Ipsum</PageHeading>
      <div className={classes.container} style={{ height: "760px", padding: 0 }}>
        <iframe src="https://nerdcave.com/tailwind-cheat-sheet" width={"100%"} height={"760px"}></iframe>
      </div>
    </div>
  );
};

export default memo(TailwindCssCheatseetPage);
