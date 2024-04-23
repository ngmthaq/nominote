import { memo, useEffect, useState } from "react";
import { MAX_TASK_NUMBER, TASK_PRIORITY, TASK_STATUS } from "@/configs/constants";
import { getPriority } from "@/configs/utils";
import PageHeading from "@/components/Common/PageHeading";
import Loading from "@/components/Common/Loading";
import useCreateTask from "./hooks/useCreateTask";
import useUpdateTask from "./hooks/useUpdateTask";
import useDeleteTask from "./hooks/useDeleteTask";
import useTasks from "./hooks/useTasks";
import classes from "./style.module.scss";

const TaskBoardPage = () => {
  const createTask = useCreateTask();
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();
  const { isFetching, tasks: originalTasks } = useTasks();

  const [tasks, setTasks] = useState(originalTasks);
  const [inputValue, setInputValue] = useState("");
  const [searchStatus, setSearchStatus] = useState("*");
  const [searchPriority, setSearchPriority] = useState("*");
  const [isOpenLoading, setIsOpenLoading] = useState(false);

  const filteredTasks = tasks
    .filter((task) => {
      const isStatusMatch = searchStatus === "*" ? true : task.status.toString() === searchStatus;
      const isPriorityMatch = searchPriority === "*" ? true : task.priority.toString() === searchPriority;
      const isIncludeTitle = task.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase().trim());
      return isIncludeTitle && isPriorityMatch && isStatusMatch;
    })
    .reverse();

  const handleChangeTaskStatus = async (task, status) => {
    setIsOpenLoading(true);
    const isSuccess = await updateTask(task.id, task.title, task.priority, status);
    setIsOpenLoading(false);
    if (isSuccess) {
      setTasks((state) =>
        state.map((taskItem) => {
          if (taskItem.title === task.title) return { ...taskItem, status };
          return taskItem;
        }),
      );
    } else {
      alert("Cannot update this task, please try again later");
    }
  };

  const handleChangeTaskPriority = async (task, priority) => {
    setIsOpenLoading(true);
    const isSuccess = await updateTask(task.id, task.title, priority, task.status);
    setIsOpenLoading(false);
    if (isSuccess) {
      setTasks((state) =>
        state.map((taskItem) => {
          if (taskItem.title === task.title) return { ...taskItem, priority };
          return taskItem;
        }),
      );
    } else {
      alert("Cannot update this task, please try again later");
    }
  };

  const handleChangeSearchStatus = (event) => {
    setSearchStatus(event.target.value);
  };

  const handleChangeSearchPriority = (event) => {
    setSearchPriority(event.target.value);
  };

  const handleCreateTask = async () => {
    if (filteredTasks.length === 0 && inputValue.trim() !== "") {
      setIsOpenLoading(true);
      const isSuccess = await createTask(
        inputValue,
        searchPriority === "*" ? TASK_PRIORITY.normal.value : parseInt(searchPriority),
        searchStatus === "*" ? TASK_STATUS.new : parseInt(searchStatus),
      );
      setIsOpenLoading(false);
      if (isSuccess) {
        setTasks((state) => [
          ...state,
          {
            title: inputValue,
            priority: searchPriority === "*" ? TASK_PRIORITY.normal.value : parseInt(searchPriority),
            status: searchStatus === "*" ? TASK_STATUS.new : parseInt(searchStatus),
          },
        ]);
      } else {
        alert("Create task failed, please try again later");
      }
    }
  };

  const handleDeleteTask = async (task) => {
    if (confirm(`Do you want to delete this task?\n${task.title}`)) {
      setIsOpenLoading(true);
      const isSuccess = await deleteTask(task.id);
      setIsOpenLoading(false);
      if (isSuccess) {
        setTasks((state) => state.filter((data) => data.id !== task.id));
      } else {
        alert("Delete task failed, please try again later");
      }
    }
  };

  useEffect(() => {
    setTasks(originalTasks);
  }, [originalTasks]);

  return (
    <div className={classes.taskBoardPage}>
      <Loading open={isOpenLoading || isFetching} />
      <PageHeading>Task Board</PageHeading>
      <div className={classes.container}>
        <div className="row">
          <div className="col-12">
            <div className={classes.form}>
              <div className="input-group mb-3">
                <span className="input-group-text" style={{ fontSize: "12px" }}>
                  Max tasks: {tasks.length} / {MAX_TASK_NUMBER}
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Type your to-do task here..."
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
                <select
                  value={searchStatus}
                  className="form-select form-select-sm"
                  style={{ width: "143px", flex: "unset" }}
                  onChange={handleChangeSearchStatus}
                >
                  <option value="*">ALL STATUS</option>
                  {Object.entries(TASK_STATUS).map(([key, value]) => (
                    <option key={value} value={value}>
                      {key.toUpperCase()}
                    </option>
                  ))}
                </select>
                <select
                  value={searchPriority}
                  className="form-select form-select-sm"
                  style={{ width: "160px", flex: "unset" }}
                  onChange={handleChangeSearchPriority}
                >
                  <option value="*">ALL PRIORITIES</option>
                  {Object.entries(TASK_PRIORITY).map(([key, { value }]) => (
                    <option key={value} value={value}>
                      {key.toUpperCase()} PRIORITY
                    </option>
                  ))}
                </select>
                <button
                  className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                  disabled={filteredTasks.length > 0 || inputValue.trim() === ""}
                  onClick={handleCreateTask}
                >
                  <i className="bi bi-plus-lg"></i>
                  ADD
                </button>
              </div>
              <ul className="list-group list-group-flush">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center justify-content-end gap-2">
                        <span
                          style={{
                            width: "4px",
                            height: "12px",
                            borderRadius: "4px",
                            background: getPriority(task.priority).color,
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
                              STATUS: {key.toUpperCase()}
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
                              PRIORITY: {key.toUpperCase()}
                            </option>
                          ))}
                        </select>
                        <button className="btn btn-sm text-danger" onClick={() => handleDeleteTask(task)}>
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-center">No task found</li>
                )}
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
