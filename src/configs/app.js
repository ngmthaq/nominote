export const MAX_NOTE_NUMBER = 500;
export const MAX_TASK_NUMBER = 100;

export const TASK_STATUS = {
  new: 1,
  inProgress: 2,
  reviewing: 3,
  resolved: 4,
};

export const TASK_PRIORITY = {
  low: { value: 1, color: "blue" },
  normal: { value: 2, color: "yellow" },
  high: { value: 3, color: "orange" },
  critical: { value: 4, color: "red" },
};

export const GET_PRIORITY = (number) => {
  const priorities = Object.values(TASK_PRIORITY);
  const priority = priorities.find((priorityItem) => priorityItem.value === number);
  return priority ? priority : TASK_PRIORITY.low;
};
