export const employees = [
    {
      id: 1,
      name: "Liam Anderson",
      email: "liam.anderson@example.com",
      password: "123",
      tasks: [
        {
          title: "Design Homepage UI",
          description: "Create a responsive homepage layout using Figma.",
          date: "2025-03-18",
          category: "Design",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Fix Navbar Bug",
          description: "Resolve the navigation issue on mobile screens.",
          date: "2025-03-19",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Update Documentation",
          description: "Improve API documentation for better clarity.",
          date: "2025-03-17",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 2,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      password: "123",
      tasks: [
        {
          title: "Test Payment Integration",
          description: "Ensure smooth transactions through Stripe.",
          date: "2025-03-18",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Optimize Database Queries",
          description: "Improve SQL queries for faster response time.",
          date: "2025-03-20",
          category: "Database",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      name: "Luke Thompson",
      email: "luke.thompson@example.com",
      password: "123",
      tasks: [
        {
          title: "Create Marketing Strategy",
          description: "Plan a social media campaign for product launch.",
          date: "2025-03-21",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Review UX Feedback",
          description: "Analyze user feedback and suggest improvements.",
          date: "2025-03-22",
          category: "UX",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 4,
      name: "Emma Robinson",
      email: "emma.robinson@example.com",
      password: "123",
      tasks: [
        {
          title: "Implement Dark Mode",
          description: "Add a dark mode toggle in settings.",
          date: "2025-03-19",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Prepare Team Presentation",
          description: "Create slides for upcoming team meeting.",
          date: "2025-03-20",
          category: "Management",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 5,
      name: "Oliver Williams",
      email: "oliver.williams@example.com",
      password: "123",
      tasks: [
        {
          title: "Refactor Authentication Code",
          description: "Improve login/logout logic for better security.",
          date: "2025-03-18",
          category: "Security",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Deploy Backend Server",
          description: "Push backend changes to production.",
          date: "2025-03-19",
          category: "DevOps",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
];
  
export const admin = [
    {
        id: 1,
        name: "Ethan Walker",
        email: "ethan.walker@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const empData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));

    return {empData, adminData};
}