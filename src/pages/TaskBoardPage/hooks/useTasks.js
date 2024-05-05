import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEYS } from "@/configs/constants";

export default function useTasks() {
  const [isFetching, setIsFetching] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const json = localStorage.getItem(LOCAL_STORAGE_KEYS.todoList) || "[]";
    const list = JSON.parse(json);
    setTasks(list);
    setIsFetching(false);
  }, []);

  console.log("useTasks:", tasks);

  return { isFetching, tasks };
}
