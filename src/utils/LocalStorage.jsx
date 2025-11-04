const employee = [
    {
        "id": 101,
        "name": "Arif Rahman",
        "email": "arif.rahman@example.com",
        "role": "employee",
        "password": "123",
        "created_at": "2025-11-01T12:00:00+06:00",
        "tasks": [
            {
                "title": "Update Client Records",
                "description": "Revise and update contact information for all clients in the CRM system.",
                "date": "2025-11-02",
                "category": "Data Entry",
                "active": true,
                "completed": false,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Prepare Sales Report",
                "description": "Generate a weekly report of sales for the marketing team.",
                "date": "2025-11-03",
                "category": "Reporting",
                "active": false,
                "completed": true,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Client Follow-up Calls",
                "description": "Call 10 pending clients to confirm their next orders.",
                "date": "2025-11-04",
                "category": "Communication",
                "active": false,
                "completed": false,
                "failed": false,
                "new_task": true
            }
        ]
    },
    {
        "id": 102,
        "name": "Fatima Noor",
        "email": "fatima.noor@example.com",
        "role": "employee",
        "password": "123",
        "created_at": "2025-11-01T12:05:00+06:00",
        "tasks": [
            {
                "title": "Design Homepage Banner",
                "description": "Create a new promotional banner for the homepage using the latest brand theme.",
                "date": "2025-11-02",
                "category": "Design",
                "active": true,
                "completed": false,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Team Meeting Presentation",
                "description": "Prepare slides for Monday’s design team meeting.",
                "date": "2025-11-03",
                "category": "Presentation",
                "active": false,
                "completed": true,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Logo Revision",
                "description": "Update the logo file with the requested color palette.",
                "date": "2025-11-04",
                "category": "Branding",
                "active": false,
                "completed": false,
                "failed": false,
                "new_task": true
            },
            {
                "title": "Social Media Template",
                "description": "Design reusable templates for Instagram and LinkedIn posts.",
                "date": "2025-11-05",
                "category": "Social Media",
                "active": false,
                "completed": false,
                "failed": true,
                "new_task": false
            }
        ]
    },
    {
        "id": 103,
        "name": "Hasan Khan",
        "email": "hasan.khan@example.com",
        "role": "employee",
        "password": "123",
        "created_at": "2025-11-01T12:10:00+06:00",
        "tasks": [
            {
                "title": "Backend API Optimization",
                "description": "Refactor the user authentication API to improve performance.",
                "date": "2025-11-02",
                "category": "Development",
                "active": true,
                "completed": false,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Fix Payment Bug",
                "description": "Resolve issue with delayed payment confirmation on checkout.",
                "date": "2025-11-03",
                "category": "Bug Fix",
                "active": false,
                "completed": true,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Add Search Filter",
                "description": "Implement category filter in the product search function.",
                "date": "2025-11-04",
                "category": "Feature",
                "active": false,
                "completed": false,
                "failed": false,
                "new_task": true
            },
            {
                "title": "Database Cleanup",
                "description": "Remove redundant entries from user logs.",
                "date": "2025-11-05",
                "category": "Database",
                "active": false,
                "completed": false,
                "failed": true,
                "new_task": false
            }
        ]
    },
    {
        "id": 104,
        "name": "Mariam Sultana",
        "email": "mariam.sultana@example.com",
        "role": "employee",
        "password": "123",
        "created_at": "2025-11-01T12:15:00+06:00",
        "tasks": [
            {
                "title": "Customer Feedback Analysis",
                "description": "Summarize key points from customer reviews for Q4 improvements.",
                "date": "2025-11-02",
                "category": "Analysis",
                "active": false,
                "completed": true,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Prepare Survey Form",
                "description": "Design a feedback form for website visitors.",
                "date": "2025-11-03",
                "category": "Research",
                "active": true,
                "completed": false,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Data Visualization",
                "description": "Create charts summarizing customer satisfaction metrics.",
                "date": "2025-11-04",
                "category": "Visualization",
                "active": false,
                "completed": false,
                "failed": false,
                "new_task": true
            }
        ]
    },
    {
        "id": 105,
        "name": "Shahriar Alam",
        "email": "shahriar.alam@example.com",
        "role": "employee",
        "password": "123",
        "created_at": "2025-11-01T12:20:00+06:00",
        "tasks": [
            {
                "title": "Inventory Check",
                "description": "Verify current warehouse stock levels and update system entries.",
                "date": "2025-11-02",
                "category": "Inventory",
                "active": true,
                "completed": false,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Shipment Coordination",
                "description": "Ensure all outgoing orders are scheduled with the courier service.",
                "date": "2025-11-03",
                "category": "Logistics",
                "active": false,
                "completed": true,
                "failed": false,
                "new_task": false
            },
            {
                "title": "Restock Request",
                "description": "Prepare restock request for fast-moving items.",
                "date": "2025-11-04",
                "category": "Procurement",
                "active": false,
                "completed": false,
                "failed": false,
                "new_task": true
            },
            {
                "title": "Damaged Goods Report",
                "description": "Record all damaged goods and notify supplier.",
                "date": "2025-11-05",
                "category": "Reporting",
                "active": false,
                "completed": false,
                "failed": true,
                "new_task": false
            }
        ]
    },

]

const admin = [
    {
        "id": 1,
        "name": "Admin User",
        "email": "admin@example.com",
        "role": "admin",
        "password": "123",
        "created_at": "2025-11-01T11:50:00+06:00",
        "tasks": []
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employee', JSON.stringify(employee))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return ({admin, employee});

}