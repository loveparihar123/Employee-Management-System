import { TASK_STATUS } from "../../../constants/taskStatus";
export const calculateTaskCount = (tasks) => ({
  newTask: tasks.filter((t) => t.status === TASK_STATUS.NEW).length,
  active: tasks.filter((t) => t.status === TASK_STATUS.ACTIVE).length,
  completed: tasks.filter((t) => t.status === TASK_STATUS.COMPLETED).length,
  failed: tasks.filter((t) => t.status === TASK_STATUS.FAILED).length,
});
