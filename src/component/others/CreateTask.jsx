import React, { useContext, useState } from "react";
import { authContext } from "../../Context/AuthProvider";
import { TASK_STATUS } from "../../../../constants/taskStatus";

const CreateTask = () => {
  const [userData, setUserData] = useContext(authContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectEmployeeId, setSelectEmployeeId] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Proper Validation Function
  const validation = () => {
    const newErr = {};

    if (!title.trim()) newErr.title = "Title is required";
    if (!date) newErr.date = "Date is required";
    if (!selectEmployeeId) newErr.employee = "Employee is required";
    if (!category.trim()) newErr.category = "Category is required";
    if (!description.trim()) newErr.description = "Description is required";

    setErrors(newErr);

    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Correct function call
    if (!validation()) return;

    const newTask = {
      id: Date.now(),
      title,
      date,
      category,
      description,
      status: TASK_STATUS.NEW,
      history: [
        {
          action: TASK_STATUS.NEW,
          at: new Date().toISOString(),
          by: "admin",
        },
      ],
    };

    try {
      const employee = userData.find(
        (emp) => String(emp.id) === String(selectEmployeeId),
      );

      if (!employee) return;

      const updateEmployee = {
        ...employee,
        tasks: [...(employee.tasks || []), newTask],
      };

      await fetch(`http://localhost:5000/employees/${employee.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEmployee),
      });

      setUserData((prev) =>
        prev.map((emp) => (emp.id === employee.id ? updateEmployee : emp)),
      );

      // Reset form
      setTitle("");
      setDate("");
      setSelectEmployeeId("");
      setCategory("");
      setDescription("");
      setErrors({});

      alert("Task created successfully");
    } catch (err) {
      console.log("Error creating task:", err);
    }
  };

  return (
    <div className="bg-[#1C1C1C] w-full text-white rounded-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-8 mt-7 p-4 md:p-7"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Title */}
          <div>
            <h3>Task Title</h3>
            <input
              className={`bg-transparent border py-1.5 mt-2 w-full rounded-md ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <h3>Date</h3>
            <input
              className={`bg-transparent border py-1.5 mt-2 w-full rounded-md ${
                errors.date ? "border-red-500" : "border-gray-300"
              }`}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && (
              <p className="text-red-400 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* Employee */}
          <div>
            <select
              value={selectEmployeeId}
              onChange={(e) => setSelectEmployeeId(e.target.value)}
              className={`mt-2 bg-[#1c1c1c] border rounded-md py-1.5 w-full ${
                errors.employee ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Employee</option>
              {userData?.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name}
                </option>
              ))}
            </select>
            {errors.employee && (
              <p className="text-red-400 text-sm mt-1">{errors.employee}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <h3>Category</h3>
            <input
              className={`mt-2 border py-1.5 bg-transparent w-full rounded-md ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {errors.category && (
              <p className="text-red-400 text-sm mt-1">{errors.category}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="w-full lg:w-1/2">
          <div>
            <h3>Description</h3>
            <textarea
              className={`w-full min-h-30 lg:min-h-62 bg-transparent border mt-2 rounded-md resize-none ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">{errors.description}</p>
            )}

            <button
              type="submit"
              className="bg-green-400 w-full py-3 px-3 rounded-md font-semibold mt-4"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
