import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const TaskBoardPage = () => {
  return (
    <div className={classes.taskBoardPage}>
      <PageHeading>Task Board</PageHeading>
    </div>
  );
};

export default memo(TaskBoardPage);
