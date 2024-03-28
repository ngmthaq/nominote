import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const TaskKanbanPage = () => {
  return (
    <div className={classes.taskKanbanPage}>
      <PageHeading>Task Kanban</PageHeading>
    </div>
  );
};

export default memo(TaskKanbanPage);
