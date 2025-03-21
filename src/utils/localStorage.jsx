
const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature.",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-red-400",
                "priority": "High"
            },
            {
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-blue-400",
                "priority": "Medium"
            },
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-orange-400",
                "priority": "Low"
            },
            {
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "color": "bg-green-400",
                "priority": "High"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "color": "bg-purple-400",
                "priority": "Medium"
            },
            {
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "color": "bg-sky-400",
                "priority": "Medium"
            },
            {
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "color": "bg-yellow-400",
                "priority": "High"
            },
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-orange-400",
                "priority": "Low"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": { "active": 4, "newTask": 3, "completed": 1, "failed": 9 },
        "tasks": [
            {
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "active": true, "newTask": true, "completed": false, "failed": false,
                "color": "bg-pink-400",
                "priority": "High"
            },
            {
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "color": "bg-teal-400",
                "priority": "Medium"
            },
            {
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-gray-400",
                "priority": "Low"
            },{
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-orange-400",
                "priority": "Low"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": { "active": 10, "newTask": 3, "completed": 7, "failed": 4 },
        "tasks": [
            {
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "active": true, "newTask": true, "completed": false, "failed": false,
                "color": "bg-indigo-400",
                "priority": "Medium"
            },
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-orange-400",
                "priority": "Low"
            },
            {
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "color": "bg-cyan-400",
                "priority": "High"
            },
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-lime-400",
                "priority": "Low"
            },
            {
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-rose-400",
                "priority": "Medium"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 12, "completed": 10, "failed": 2 },
        "tasks": [
            {
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-fuchsia-400",
                "priority": "Low"
            },
            {
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "active": true, "newTask": true, "completed": false, "failed": false,
                "color": "bg-violet-400",
                "priority": "High"
            },
            {
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-amber-400",
                "priority": "Medium"
            },
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-orange-400",
                "priority": "Low"
            },
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "color": "bg-emerald-400",
                "priority": "Low"
            },
            {
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "color": "bg-sky-400",
                "priority": "Medium"
            }
        ]
    }
];



const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const empData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));

    return {empData, adminData};
}