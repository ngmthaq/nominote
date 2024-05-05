import { LOCAL_STORAGE_KEYS } from "@/configs/constants";
import { generateRandomString } from "@/helpers/str";

export default function useCreateTask() {
  return async (title, priority, status) => {
    try {
      const id = Date.now() + "_" + generateRandomString(16);
      const payload = { id, title, priority, status };
      const json = localStorage.getItem(LOCAL_STORAGE_KEYS.todoList) || "[]";
      const list = JSON.parse(json);
      const newList = [...list, payload];
      localStorage.setItem(LOCAL_STORAGE_KEYS.todoList, JSON.stringify(newList));
      console.log("useCreateTask", payload);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
