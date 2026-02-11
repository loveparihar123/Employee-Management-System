import { TASK_STATUS } from "../../../constants/taskStatus";
const employees = [
  {
    id: 1,
    name: "Aniket Baghel",
    email: "employee1@company.com",
    password: "123",

    tasks: [
      {
        id: 101,
        title: "Build Login Page",
        description: "Create login UI using React",
        date: "2026-01-10",
        category: "Frontend",
        status: TASK_STATUS.NEW,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T10:00:00.000Z",
            by: "Admin",
          },
        ],
      },
      {
        id: 102,
        title: "Fix Header Bug",
        description: "Resolve responsive header issue",
        date: "2026-01-05",
        category: "Bug Fix",
        status: TASK_STATUS.COMPLETED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T11:00:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-10T13:30:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-15T14:50:00.000Z",
            by: "Employee",
          },
        ],
      },
      {
        id: 103,
        title: "Payment API",
        description: "Integrate payment gateway",
        date: "2026-01-03",
        category: "Backend",
        status: TASK_STATUS.FAILED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-15T13:10:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-16T15:30:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.FAILED,
            at: "2026-01-17T16:30:00.000Z",
            by: "Employee",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Manish Gola",
    email: "employee2@company.com",
    password: "123",

    tasks: [
      {
        id: 104,
        title: "Design Dashboard",
        description: "Create employee dashboard layout",
        date: "2026-01-11",
        category: "UI/UX",
        status: TASK_STATUS.NEW,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-20T12:00:00.000Z",
            by: "Admin",
          },
        ],
      },
      {
        id: 105,
        title: "Write Tests",
        description: "Add unit tests for auth module",
        date: "2026-01-06",
        category: "Testing",
        status: TASK_STATUS.COMPLETED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-12T11:15:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-14T12:40:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-16T14:00:00.000Z",
            by: "Employee",
          },
        ],
      },
      {
        id: 106,
        title: "Optimize Code",
        description: "Improve app performance",
        date: "2026-01-14",
        category: "Optimization",
        status: TASK_STATUS.COMPLETED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T10:00:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-11T11:30:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-14T16:00:00.000Z",
            by: "Employee",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Sumit Sharma",
    email: "employee3@company.com",
    password: "123",

    tasks: [
      {
        id: 107,
        title: "Create API",
        description: "Develop REST API for tasks",
        date: "2026-01-09",
        category: "Backend",
        status: TASK_STATUS.FAILED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T13:00:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-16T15:30:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.FAILED,
            at: "2026-01-16T17:00:00.000Z",
            by: "Employee",
          },
        ],
      },
      {
        id: 108,
        title: "Database Schema",
        description: "Design database tables",
        date: "2026-01-04",
        category: "Database",
        status: TASK_STATUS.COMPLETED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-20T10:00:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-22T11:30:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-25T16:00:00.000Z",
            by: "Employee",
          },
        ],
      },
      {
        id: 109,
        title: "Deploy App",
        description: "Deploy app on server",
        date: "2026-01-02",
        category: "DevOps",
        status: TASK_STATUS.FAILED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T12:10:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-12T13:20:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-12T15:45:00.000Z",
            by: "Employee",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Sonu Sharma",
    email: "employee4@company.com",
    password: "123",

    tasks: [
      {
        id: 110,
        title: "Create Forms",
        description: "Build task creation forms",
        date: "2026-01-13",
        category: "Frontend",
        status: TASK_STATUS.NEW,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-18T10:00:00.000Z",
            by: "Admin",
          },
        ],
      },
      {
        id: 111,
        title: "Fix Validation",
        description: "Fix form validation issues",
        date: "2026-01-07",
        category: "Bug Fix",
        status: TASK_STATUS.COMPLETED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-15T11:00:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-17T12:20:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-21T13:50:00.000Z",
            by: "Employee",
          },
        ],
      },
      {
        id: 112,
        title: "Add Filters",
        description: "Add task filter functionality",
        date: "2026-01-15",
        category: "Feature",
        status: TASK_STATUS.ACTIVE,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T12:10:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-20T13:55:00.000Z",
            by: "Employee",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Shivam Rathoree",
    email: "employee5@company.com",
    password: "123",

    tasks: [
      {
        id: 113,
        title: "Research Tools",
        description: "Research best tools for project",
        date: "2026-01-08",
        category: "Research",
        status: TASK_STATUS.ACTIVE,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T10:20:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-22T11:20:00.000Z",
            by: "Employee",
          },
        ],
      },
      {
        id: 114,
        title: "Prepare Docs",
        description: "Write project documentation",
        date: "2026-01-06",
        category: "Documentation",
        status: TASK_STATUS.COMPLETED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-16T10:40:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-20T12:00:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-23T14:00:00.000Z",
            by: "Employee",
          },
        ],
      },
      {
        id: 115,
        title: "Client Demo",
        description: "Prepare demo for client",
        date: "2026-01-01",
        category: "Presentation",
        status: TASK_STATUS.FAILED,
        history: [
          {
            action: TASK_STATUS.NEW,
            at: "2026-01-10T10:00:00.000Z",
            by: "Admin",
          },
          {
            action: TASK_STATUS.ACTIVE,
            at: "2026-01-11T11:30:00.000Z",
            by: "Employee",
          },
          {
            action: TASK_STATUS.COMPLETED,
            at: "2026-01-12T16:00:00.000Z",
            by: "Employee",
          },
        ],
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    name: "love parihar",
    email: "admin1@company.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("Employees", JSON.stringify(employees));
  localStorage.setItem("Admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const Employees = JSON.parse(localStorage.getItem("Employees"));
  const Admin = JSON.parse(localStorage.getItem("Admin"));

  return { Employees, Admin };
};
