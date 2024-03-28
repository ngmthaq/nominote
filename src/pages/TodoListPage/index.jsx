import { memo } from "react";
import classes from "./style.module.scss";

const TodoListPage = () => {
  return <div className={classes.todoListPage}>Todo List Page</div>;
};

export default memo(TodoListPage);
