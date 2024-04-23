import { TASK_PRIORITY } from "./constants";

export const getPriority = (number) => {
  const priorities = Object.values(TASK_PRIORITY);
  const priority = priorities.find((priorityItem) => priorityItem.value === number);
  return priority ? priority : TASK_PRIORITY.low;
};
