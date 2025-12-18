

export const projects = [
  
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio built with React, TailwindCSS, and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "frontend",
    image: "/rusham-fe.png",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    content: `
This portfolio website showcases my work as a frontend developer.  
It is built with **React + TypeScript**, styled using **TailwindCSS**, and animated with **Framer Motion**.

**Key Features:**
- Responsive design that works on all devices
- Dark mode toggle for better user experience
- Smooth animations and transitions
- Contact form with spam protection
- Project filtering by category

**Challenges & Solutions:**
One of the main challenges was implementing smooth scroll animations while maintaining good performance. I solved this by using Framer Motion's viewport detection and lazy loading components.
    `,
  },
  
  {
    slug: "rideable-fe",
    title: "rideAble - Accessible ride request",
    description: "Accessible rides request platform to meet up with your clinical and hospital appointments.",
    tags: ["React", "Google Maps", "Typescript", "Tailwind CSS", "ORS Geolocation"],
    category: "frontend",
    image: "/rideable-fe.png",
    githubUrl: "https://github.com/amazingawwal/rideAble-FE",
    liveUrl: "https://ride-able-fe.vercel.app/",
    content: `
an accessibility-focused web app that helps users manage mobility and accessibility-related services.

**Features:**
- User authentication with JWT tokens
- Role-based access control (RBAC)
- Input validation 

**APIs Used:**
- Google Maps API 
- ORS Geolocation API for user location

**Highlights:**
Implemented data caching to reduce API calls and improve performance.
    `,
  },

  // Backend Projects
  {
    slug: "rideable-rest-api-nodejs",
    title: "rideAble RESTful API with Node.js",
    description: "Scalable REST API with authentication, validation, and database integration.",
    tags: ["Node.js", "Nest.js", "Prisma", "JWT"],
    category: "backend",
    image: "/rideable-be.png",
    githubUrl: "https://github.com/amazingawwal/rideAble-be",
    content: `
A production-ready RESTful API built with Node.js and Express, featuring comprehensive authentication and data management.

**Key Features:**
- User authentication with JWT tokens
- Role-based access control (RBAC)
- Input validation and sanitization
- Error handling middleware
- Rate limiting and security headers
- API documentation with Swagger

**Tech Stack:**
- Node.js & Express for server
- Prisma 
- JWT for authentication
- bcrypt for password hashing



**Architecture Highlights:**
- MVC pattern for code organization
- Middleware chain for request processing
- Custom error handling system
- Database connection pooling
- Environment-based configuration

**Security Measures:**
Implemented CORS, rate limiting, input sanitization, and SQL injection prevention.
    `,
  },
  {
    slug: "rusham-backend",
    title: "Distress Sales Marketplace Backend API",
    description: "Complete backend system with payment integration and order management.",
    tags: ["Node.js", "PostgreSQL", "Paystack", "Nest.js", "Prisma"],
    category: "backend",
    image: "/rusham-fe.png",
    githubUrl: "https://github.com/kodecampteam/distress-marketplace-be",
    content: `
A robust distress sales market place backend API handling products, orders, payments, and user management.

**Core Features:**
- Product catalog management (CRUD operations)
- Shopping cart with session management
- Order processing pipeline
- Payment integration with Stripe
- Inventory management
- Email notifications
- Admin dashboard endpoints

**Database Design:**
- PostgreSQL/Prisma for relational data
- JWT for Authentication/Authorization
- Database migrations with Sequelize
- Optimized queries with indexes

**Payment Processing:**
- Secure Paystack integration
- Webhook handling for payment events
- Refund processing
- Transaction logging

**Performance Optimizations:**
- Database query optimization
- Connection pooling
- Background job processing for emails
    `,
  },
  {
    slug: "chat-backend",
    title: "Real-Time Chat Server",
    description: "WebSocket-based chat server with room management and message persistence.",
    tags: ["Node.js", "Socket.io", "MongoDB", "WebSockets"],
    category: "backend",
    image: "https://via.placeholder.com/600x400?text=Chat+Server",
    githubUrl: "https://github.com/yourusername/chat-server",
    content: `
A scalable real-time chat server supporting multiple rooms, private messaging, and message history.

**Features:**
- Real-time messaging with Socket.io
- Multiple chat rooms
- Private direct messages
- Typing indicators
- Read receipts
- Message history persistence
- User online/offline status
- File upload support

**Tech Stack:**
- Node.js & Express
- Socket.io for WebSocket connections
- MongoDB for message storage
- Redis for presence tracking

**Real-Time Features:**
- Bi-directional event-based communication
- Room broadcasting
- Namespace isolation
- Connection state management

**Scalability Considerations:**
- Redis adapter for multi-server deployments
- Message queue for handling spikes
- Database indexing for fast queries
- Horizontal scaling capability

**Challenges Solved:**
Handling connection drops gracefully, implementing message delivery guarantees, and optimizing database queries for chat history.
    `,
  },

  // Full-Stack Projects
  {
    slug: "task-management-app",
    title: "Task Management Application",
    description: "Full-stack project management tool with team collaboration features.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    category: "fullstack",
    image: "https://via.placeholder.com/600x400?text=Task+Manager",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://yourtasks.com",
    content: `
A comprehensive task management application similar to Trello, with real-time collaboration features.

**Frontend:**
- React with TypeScript
- Redux Toolkit for state management
- Drag-and-drop functionality
- Real-time updates via WebSockets
- Responsive design with Tailwind CSS

**Backend:**
- Node.js/Express REST API
- Socket.io for real-time features
- PostgreSQL database
- JWT authentication
- File upload handling

**Key Features:**
- Project boards with customizable columns
- Task cards with descriptions, due dates, and attachments
- Team member assignment
- Real-time collaboration
- Activity history and comments
- Email notifications
- Search and filtering

**Technical Highlights:**
Implemented optimistic UI updates, conflict resolution for concurrent edits, and efficient data synchronization between frontend and backend.
    `,
  },
]


export const getFrontendProjects = () => 
  projects.filter(p => p.category === 'frontend')

export const getBackendProjects = () => 
  projects.filter(p => p.category === 'backend')

export const getFullstackProjects = () => 
  projects.filter(p => p.category === 'fullstack')

export const getAllCategories = () => 
  [...new Set(projects.map(p => p.category))]