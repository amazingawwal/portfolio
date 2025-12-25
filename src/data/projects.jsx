

export const projects = [

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
    slug: "prompt-chaining-ai",
    title: "Prompt Chaining with OpenRouter",
    description: "Multi-step AI pipeline for intelligent customer support query processing.",
    tags: ["Python", "OpenRouter API", "LLM", "Prompt Engineering"],
    category: "ai",
    image: '/prompt-chain.png',
    githubUrl: "https://github.com/amazingawwal/Prompt-Chaining",
    content: `
A sophisticated prompt-chaining pipeline that demonstrates advanced AI prompt engineering techniques using the OpenRouter API to process customer support queries through multiple intelligent stages.

**What is Prompt Chaining?**
Prompt chaining is a technique where complex AI tasks are broken down into smaller, sequential steps. Each step's output becomes the input for the next step, creating a logical pipeline that produces more accurate and controllable results than a single monolithic prompt.

**The Five-Step Pipeline:**

**Step 1: Intent Interpretation**
The AI analyzes the customer's message to understand their core need or problem in simple terms.

**Step 2: Category Mapping**
Based on the interpreted intent, the system suggests up to three relevant issue categories with reasoning for each suggestion.

**Step 3: Category Selection**
The AI evaluates the suggested categories and chooses the most appropriate one for routing the query.

**Step 4: Detail Extraction**
Structured information is extracted from the query, such as dates, card numbers, account details, or other relevant data points needed to resolve the issue.

**Step 5: Response Generation**
A polite, customer-facing reply is generated that addresses the specific issue with the appropriate level of empathy and information.

**Technical Implementation:**
- Python 3.10+ for core logic
- OpenRouter API for flexible LLM access
- Environment-based configuration with python-dotenv
- Modular function design for each chain step
- JSON parsing for structured data extraction

**Key Features:**
- Sequential reasoning for complex queries
- Flexible model selection (supports GPT-4, Claude, and other models via OpenRouter)
- Structured data extraction from natural language
- Easy to debug and modify individual steps
- Cost-effective API usage through OpenRouter

**Use Cases:**
- Customer support automation
- Content moderation pipelines
- Document processing workflows
- Multi-step decision systems
- Data extraction and transformation
    `,
  },
  {
    slug: "rag-system-chromadb",
    title: "RAG System with ChromaDB",
    description: "Production-ready Retrieval-Augmented Generation system with semantic chunking and vector embeddings.",
    tags: ["Node.js", "ChromaDB", "RAG", "Vector DB", "HuggingFace", "Gemini AI"],
    category: "ai",
    image: "/RAG.png",
    githubUrl: "https://github.com/amazingawwal/RAG",
    content: `
A production-ready Retrieval-Augmented Generation (RAG) system that combines semantic search with AI-powered question answering, enabling intelligent document analysis and contextual responses.

RAG (Retrieval-Augmented Generation) is an advanced AI architecture that enhances Large Language Models by retrieving relevant information from a knowledge base before generating responses. This prevents hallucinations and enables AI to answer questions based on specific, verifiable documents.

**System Architecture:**

The system implements a sophisticated pipeline:

1. Documents are semantically chunked based on sentence boundaries

2. Text chunks are converted to vector embeddings using HuggingFace transformers

3. Embeddings are stored in ChromaDB for efficient similarity search

4. User queries are vectorized and matched against the knowledge base

5. Relevant context is retrieved and fed to Google's Gemini LLM

6. The AI generates accurate, context-aware responses

**Key Features:**

**Semantic Document Chunking**
Intelligently splits documents based on natural language boundaries and configurable word count, preserving context and meaning rather than arbitrary character limits.

**Vector Embeddings**
Uses HuggingFace's sentence-transformers/all-MiniLM-L6-v2 model to generate high-quality 384-dimensional embeddings that capture semantic meaning.

**ChromaDB Vector Storage**
Persistent vector database with efficient cosine similarity search, supporting millions of embeddings with millisecond query times.

**AI-Powered Answers**
Leverages Google's Gemini 1.5 Flash model for natural, accurate responses based on retrieved context.

**Dynamic Rechunking**
Re-process existing documents with different chunk sizes without re-uploading, allowing optimization based on use case.

**Context Filtering**
Organize documents by project or topic, enabling focused searches within specific knowledge domains.

**RESTful API**
Simple HTTP endpoints for document upload, querying, rechunking, and health monitoring.

**Technical Implementation:**

**Backend Stack:**
- Node.js with Express for API server
- Multer for multipart file uploads
- ChromaDB client for vector operations
- HuggingFace Inference API for embeddings
- Google Generative AI SDK for LLM integration

**Vector Database:**
- ChromaDB running in Docker container
- Persistent storage with collection management
- Cosine similarity search with configurable k-nearest neighbors
- Metadata filtering for context-aware retrieval

**Embedding Pipeline:**
- Sentence-based chunking with configurable size
- Batch embedding generation for efficiency
- Automatic retry logic with exponential backoff
- Error handling for rate limits and API failures



**Use Cases:**

**Document Q&A Systems:**
Build intelligent chatbots that answer questions based on company documentation, technical manuals, or knowledge bases.

**Research Assistant:**
Index academic papers, research documents, or books and query them for specific information with source attribution.

**Customer Support:**
Create AI assistants that provide accurate answers from support documentation, FAQs, and troubleshooting guides.

**Legal/Compliance:**
Search through contracts, regulations, or legal documents with semantic understanding beyond keyword matching.

**Content Analysis:**
Analyze large document collections to extract insights, patterns, or specific information across multiple sources.
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