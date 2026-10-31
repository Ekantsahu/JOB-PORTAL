# 💼 MERN Stack Job Portal

A full-stack job portal built with the **MERN stack** that connects students looking for opportunities with recruiters looking to hire. Students can explore and apply for jobs, while recruiters can publish job openings and manage applications through a dedicated interface.

---

## 📌 1. Project Overview

The MERN Stack Job Portal provides separate workflows for students and recruiters in one application.

- **Students** can create an account, browse and filter job listings, view job details, and apply for suitable opportunities.
- **Recruiters** can create and manage job listings, review applications, and accept or reject candidates.

The application uses React with Vite for the frontend, Redux Toolkit for state management, and a Node.js/Express backend connected to MongoDB. JWT-based authentication helps protect routes and user-specific actions.

## ✨ 2. Key Features

### 🔐 User Authentication
- Sign up and log in as a student or recruiter.
- JWT-based authentication.
- Role-based access to student and recruiter functionality.
- Protected routes for authenticated users.

### 💼 Job Management
- Recruiters can create, view, update, and delete job listings.
- Job listings can include information such as title, description, requirements, location, salary, and job type, depending on the configured form.
- Students can browse available job openings.

### 📝 Job Application System
- Students can apply for jobs.
- Students can track their submitted applications, where supported by the application UI.
- Recruiters can review applications for their job listings.
- Recruiters can accept or reject applications.

### 🔎 Search and Filtering
- Search for jobs using available search fields.
- Filter job listings using supported criteria, such as location, job category, or job type.
- Browse relevant opportunities more efficiently.

### 📎 File Uploads
- Multer handles file uploads on the backend.
- Cloudinary stores uploaded files, such as profile images or resumes, when configured in the application.

### 🎨 Responsive User Interface
- React components built with reusable UI patterns.
- Tailwind CSS for styling.
- Shadcn UI components for a consistent interface.
- Redux Toolkit for shared application state.

## 🛠️ 3. Technology Stack

| Area | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS, Shadcn UI |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose (if used by the project) |
| Authentication | JSON Web Tokens (JWT) |
| File Uploads | Multer, Cloudinary |
| API Communication | REST APIs, Fetch or Axios (depending on implementation) |
| Development Tools | npm, Git, GitHub, VS Code |

## ⚙️ 4. Setup Instructions

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) (use a version supported by your project)
- npm, included with Node.js
- A MongoDB instance, either local or hosted with MongoDB Atlas
- A Cloudinary account if the application uploads files to Cloudinary
- Git

### 4.1 Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

Replace the placeholders with your repository URL and project folder name.

### 4.2 Install Dependencies

If the frontend and backend have separate `package.json` files, install dependencies in each folder:

```bash
cd backend
npm install
```

Then install the frontend dependencies:

```bash
cd ../frontend
npm install
```

> If your repository uses different folder names, adjust these commands accordingly.

### 4.3 Configure Environment Variables

Create a `.env` file in the **backend directory** and add the variables required by your implementation.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

If the frontend needs a backend API URL, create a `.env` file in the frontend directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

**Important:**
- These variable names are examples. Check the backend configuration and replace them with the exact names your code reads.
- If the frontend expects a URL ending in `/api/v1` or another route prefix, include that prefix in the value.
- Never commit real credentials, JWT secrets, database passwords, or Cloudinary API secrets to GitHub.
- Add `.env` to `.gitignore`. You may commit an `.env.example` containing placeholder values instead.
- Vite exposes variables prefixed with `VITE_` to frontend code. Never place private secrets in frontend environment variables.

### 4.4 Run the Application

Open two terminals.

**Terminal 1: Start the backend**

```bash
cd backend
npm run dev
```

Use `npm start` instead if that is the start command defined in your backend's `package.json`. Make sure your MongoDB connection and required environment variables are configured.

**Terminal 2: Start the frontend**

```bash
cd frontend
npm run dev
```

Vite will print the local development URL in the terminal, commonly `http://localhost:5173`.

Open the displayed URL in your browser. Confirm that the frontend's API base URL matches the port and route configuration of the backend.

### 4.5 Verify the Setup

- [ ] Backend starts without errors.
- [ ] MongoDB connects successfully.
- [ ] Frontend starts and opens in the browser.
- [ ] Student and recruiter sign-up/login work.
- [ ] Recruiters can manage job listings.
- [ ] Students can search for jobs and submit applications.
- [ ] Recruiters can review and update application statuses.
- [ ] File uploads work if Cloudinary is configured.

## 🚀 5. Future Scope / Improvements

Potential enhancements for future versions include:

- 📧 **Email Notifications:** Notify students when their application status changes and recruiters when a new application arrives.
- 🔔 **In-App Notifications:** Add notifications for new jobs and application updates.
- 📄 **Resume Preview:** Let recruiters preview uploaded resumes before downloading them.
- 📊 **Recruiter Dashboard:** Add analytics for job listings, application counts, and hiring progress.
- ⭐ **Saved Jobs:** Allow students to bookmark jobs and revisit them later.
- 🧠 **Smart Job Recommendations:** Recommend jobs based on a student's skills, interests, and application history.
- 🔍 **Improved Search:** Add pagination, sorting, and more precise filters.
- 🛡️ **Security Improvements:** Add request validation, rate limiting, secure cookie handling where appropriate, and more comprehensive authorization checks.
- 🧪 **Testing:** Add unit and integration tests for key frontend components and backend APIs.
- ☁️ **Deployment:** Deploy the frontend and backend and configure production environment variables, CORS, and database access.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and test them.
4. Open a pull request describing the changes.



**Built with ❤️ using the MERN stack.**
