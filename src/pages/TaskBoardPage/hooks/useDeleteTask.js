import { LOCAL_STORAGE_KEYS } from "@/configs/constants";

export default function useDeleteTask() {
  return async (id) => {
    try {
      console.log("useDeleteTask id:", id);
      const json = localStorage.getItem(LOCAL_STORAGE_KEYS.todoList) || "[]";
      const list = JSON.parse(json);
      const newList = list.filter((item) => item.id !== id);
      localStorage.setItem(LOCAL_STORAGE_KEYS.todoList, JSON.stringify(newList));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
