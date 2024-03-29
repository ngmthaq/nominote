import { memo, useMemo, useState } from "react";
import { GET_PRIORITY, MAX_TASK_NUMBER, TASK_PRIORITY, TASK_STATUS } from "@/configs/app";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const TaskBoardPage = () => {
  const [tasks, setTasks] = useState(MOCKS);
  const [inputValue, setInputValue] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        return task.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase().trim());
      })
      .reverse();
  }, [tasks, inputValue]);

  const handleChangeTaskStatus = (task, status) => {
    setTasks((state) =>
      state.map((taskItem) => {
        if (taskItem.title === task.title) return { ...taskItem, status };
        return taskItem;
      }),
    );
  };

  const handleChangeTaskPriority = (task, priority) => {
    setTasks((state) =>
      state.map((taskItem) => {
        if (taskItem.title === task.title) return { ...taskItem, priority };
        return taskItem;
      }),
    );
  };

  return (
    <div className={classes.taskBoardPage}>
      <PageHeading>Task Board</PageHeading>
      <div className={classes.container}>
        <div className="row">
          <div className="col-12">
            <div className={classes.form}>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-list-task"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your to-do task here..."
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
                <span className="input-group-text" style={{ fontSize: "12px" }}>
                  Max Task Number: {tasks.length} / {MAX_TASK_NUMBER}
                </span>
              </div>
              {filteredTasks.length === 0 && (
                <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2 mb-2">
                  <i className="bi bi-plus-lg"></i>
                  Add new task
                </button>
              )}
              <ul className="list-group list-group-flush">
                {filteredTasks.map((task, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-end gap-2">
                      <span
                        style={{
                          width: "4px",
                          height: "12px",
                          borderRadius: "4px",
                          background: GET_PRIORITY(task.priority).color,
                        }}
                      />
                      <span
                        style={{
                          textDecoration: task.status === TASK_STATUS.resolved ? "line-through" : "none",
                          display: "block",
                          minWidth: "280px",
                          width: "100%",
                        }}
                      >
                        {task.title}
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-end gap-2">
                      <select
                        className="form-select form-select-sm"
                        value={task.status}
                        onChange={(event) => handleChangeTaskStatus(task, parseInt(event.target.value))}
                      >
                        {Object.entries(TASK_STATUS).map(([key, value]) => (
                          <option key={value} value={value}>
                            {key.toUpperCase()}
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-select form-select-sm"
                        value={task.priority}
                        onChange={(event) => handleChangeTaskPriority(task, parseInt(event.target.value))}
                      >
                        {Object.entries(TASK_PRIORITY).map(([key, { value }]) => (
                          <option key={value} value={value}>
                            {key.toUpperCase()} PRIORITY
                          </option>
                        ))}
                      </select>
                      <button className="btn btn-sm text-primary">
                        <i className="bi bi-chat-left-dots-fill"></i>
                      </button>
                      <button className="btn btn-sm text-danger">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </li>
                ))}
                <li
                  className="list-group-item mt-3 text-secondary d-flex align-items-center gap-3"
                  style={{ fontSize: "12px" }}
                >
                  <span>Found: {filteredTasks.length} task(s)</span>
                  <span>|</span>
                  <span>
                    Resolved: {filteredTasks.filter((task) => task.status === TASK_STATUS.resolved).length} task(s)
                  </span>
                  <span>|</span>
                  <span>
                    High Priority: {filteredTasks.filter((task) => task.priority === TASK_PRIORITY.high.value).length}{" "}
                    task(s)
                  </span>
                  <span>|</span>
                  <span>
                    Critical Priority:{" "}
                    {filteredTasks.filter((task) => task.priority === TASK_PRIORITY.critical.value).length} task(s)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TaskBoardPage);

const MOCKS = [
  { title: "Have breakfast", priority: 1, status: 1, comments: [] },
  { title: "Gia Minh interview frontend developer", priority: 1, status: 1, comments: [] },
  { title: "Collate interview frontend developer", priority: 1, status: 1, comments: [] },
  { title: "HTC interview frontend developer", priority: 1, status: 1, comments: [] },
  { title: "Task 5", priority: 1, status: 1, comments: [] },
  { title: "Task 6", priority: 1, status: 1, comments: [] },
  { title: "Task 7", priority: 1, status: 2, comments: [] },
];
