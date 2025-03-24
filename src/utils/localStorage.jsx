const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": { "active": 1, "newTask": 2, "completed": 3, "failed": 0 },
        "tasks": [
            {
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature.",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "UI Improvements",
                "taskDescription": "Enhance UI for better user experience",
                "taskDate": "2024-10-15",
                "active": false, "newTask": true, "completed": false, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Write unit tests",
                "taskDescription": "Add test cases for recent changes",
                "taskDate": "2024-10-16",
                "active": false, "newTask": true, "completed": false, "failed": false,
                "priority": "Low"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": { "active": 3, "newTask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "New Dashboard",
                "taskDescription": "Develop a new dashboard layout",
                "taskDate": "2024-10-17",
                "active": false, "newTask": true, "completed": false, "failed": false,
                "priority": "High"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 1, "completed": 2, "failed": 1 },
        "tasks": [
            {
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "priority": "Low"
            },
            {
                "taskTitle": "Critical Bug Fix",
                "taskDescription": "Fix the security issue reported last week",
                "taskDate": "2024-10-18",
                "active": true, "newTask": true, "completed": false, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "Old Task Failure",
                "taskDescription": "The deployment failed due to a configuration issue",
                "taskDate": "2024-10-05",
                "active": false, "newTask": false, "completed": false, "failed": true,
                "priority": "High"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 2, "completed": 3, "failed": 1 },
        "tasks": [
            {
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "active": true, "newTask": true, "completed": false, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "Design review",
                "taskDescription": "Review new design proposals",
                "taskDate": "2024-10-12",
                "active": false, "newTask": true, "completed": false, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Bug fix deployment",
                "taskDescription": "Deploy fix for the reported bug",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "Failed server migration",
                "taskDescription": "Server migration failed due to config issue",
                "taskDate": "2024-10-05",
                "active": false, "newTask": false, "completed": false, "failed": true,
                "priority": "High"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": { "active": 2, "newTask": 3, "completed": 2, "failed": 1 },
        "tasks": [
            {
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "active": true, "newTask": true, "completed": false, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "active": true, "newTask": false, "completed": false, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "New feature brainstorming",
                "taskDescription": "Discuss new feature ideas with the team",
                "taskDate": "2024-10-15",
                "active": false, "newTask": true, "completed": false, "failed": false,
                "priority": "Low"
            },
            {
                "taskTitle": "Security Patch Update",
                "taskDescription": "Apply latest security patch",
                "taskDate": "2024-10-11",
                "active": false, "newTask": true, "completed": false, "failed": false,
                "priority": "High"
            },
            {
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "active": false, "newTask": false, "completed": true, "failed": false,
                "priority": "Medium"
            },
            {
                "taskTitle": "Integration Test Failure",
                "taskDescription": "Fix failed integration test in CI pipeline",
                "taskDate": "2024-10-06",
                "active": false, "newTask": false, "completed": false, "failed": true,
                "priority": "Critical"
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
    if (!localStorage.getItem("employees")) {
        localStorage.setItem("employees", JSON.stringify(employees));
    }
    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const empData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));

    return {empData, adminData};
}