import { LOCAL_STORAGE_KEYS } from "@/configs/constants";

export default function useUpdateTask() {
  return async (id, title, priority, status) => {
    try {
      console.log("useUpdateTask id:", id);
      const json = localStorage.getItem(LOCAL_STORAGE_KEYS.todoList) || "[]";
      const list = JSON.parse(json);
      const newList = list.map((item) => {
        if (item.id !== id) return item;
        return { ...item, title, priority, status };
      });
      localStorage.setItem(LOCAL_STORAGE_KEYS.todoList, JSON.stringify(newList));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
