import { calculateTaskCount } from "../../utils/taskUtils";

const TaskListNumber = ({ data }) => {
  console.log(data?.tasks);
  const counts = calculateTaskCount(data?.tasks || []);

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
      <div className="bg-red-400 py-6 px-6 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold">{counts.newTask}</h2>
        <h2 className="text-lg md:text-xl font-medium">New Task</h2>
      </div>

      <div className="bg-blue-400 py-6 px-6 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {counts.completed}
        </h2>
        <h2 className="text-lg md:text-xl font-medium">Completed Task</h2>
      </div>

      <div className="bg-green-400 py-6 px-6 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold">{counts.active}</h2>
        <h2 className="text-lg md:text-xl font-medium">Accepted Task</h2>
      </div>

      <div className="bg-neutral-700 py-6 px-6 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold">{counts.failed}</h2>
        <h2 className="text-lg md:text-xl font-medium">Failed Task</h2>
      </div>
    </div>
  );
};

export default TaskListNumber;
