# DSO101 Assignment 1 — To-Do App with Docker

**Student ID: 02250349**

## AIM
This project takes a To-Do web application and packages it using Docker so it can run anywhere. Then it deploys it live on the internet using Render.com.

## Objectives
- Package the frontend (React) and backend (Node.js) into Docker containers
- Push both Docker images to DockerHub
- Set up a PostgreSQL database on Render
- Use a render.yaml file to deploy everything automatically
- Make both frontend and backend work together online

---

## Background Information

### What is a Full-Stack Application?
A full-stack application has two parts working together:
- **Frontend** — what the user sees and clicks on (built with React in this project)
- **Backend** — the server that handles data and logic (built with Node.js and Express)
- **Database** — where all the data is stored (PostgreSQL in this project)

Think of it like a restaurant — the frontend is the dining area, the backend is the kitchen, and the database is the storage room.

---

### What is Containerisation?
Before Docker, developers had this common problem — an app works perfectly on their laptop but breaks on another computer because of different software versions or settings.

Containerisation solves this by bundling the app together with everything it needs — the code, libraries, settings — into one neat package called a **container**. It is like packing your lunch in a lunchbox. No matter where you take it, everything you need is already inside.

---

## Theoretical Information

### What is Docker?
Docker packages your app and everything it needs into a container. This means the app runs the same way on your laptop, your friend's laptop, or a server — no more "it works on my machine" problems.

### What is Render Blueprint?
Instead of setting up each service manually, we write a `render.yaml` file that describes all our services. Render reads this file and sets everything up automatically. Every time we push code to GitHub, Render redeploys the app automatically.

### Security
Database passwords are stored as environment variables — not written directly in the code.

---

## IMPLEMENTATION STEPS

### Step 1: Backend Dockerfile
A Dockerfile tells Docker how to build your app. Here is the one used for the backend:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

### Step 2: Frontend Dockerfile
The frontend uses two stages — one to build the React app, one to serve it:

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Step 3: Build and Push Docker Images

**Backend:**
```bash
docker build -t 06dewa/be-todo:02250349 ./backend
```
<img src="images_readme/Be_buildimage.png" alt="Backend build image">

```bash
docker push 06dewa/be-todo:02250349
```
<img src="images_readme/be_pushimage.png" alt="Backend push image">

**Frontend:**
```bash
docker build -t 06dewa/fe-todo:02250349 ./frontend
```
<img src="images_readme/fe_buildimage.png" alt="Frontend build image">

```bash
docker push 06dewa/fe-todo:02250349
```
<img src="images_readme/fe_pushimage.png" alt="Frontend push image">

**Docker Images:**
<img src="images_readme/docker_be&fe.png" alt="Docker backend and frontend images">

### Step 4: PostgreSQL Database on Render
Created a free PostgreSQL database on Render with these details:
<img src="images_readme/postgres_render.png" alt="PostgreSQL on Render">

### Step 5: render.yaml Blueprint File
This file tells Render how to deploy both services:

```yaml
services:
  - type: web
    name: be-todo
    env: docker
    plan: free
    dockerfilePath: ./backend/Dockerfile
    dockerContext: ./backend
    envVars:
      - key: DATABASE_URL
        value: postgresql://my_todo_db_vzjq_user:CjybHWbIalaW1GcEIJBir4Vg9nCNT0bf@dpg-d7odivi8qa3s73ahr2ng-a.singapore-postgres.render.com:5432/my_todo_db_vzjq?sslmode=require
      - key: PORT
        value: 5000

  - type: web
    name: fe-todo
    env: docker
    plan: free
    dockerfilePath: ./frontend/Dockerfile
    dockerContext: ./frontend
    envVars:
      - key: REACT_APP_API_URL
        value: https://be-todo.onrender.com
```

### Step 6: Deploy on Render

1. Go to Render → **New → Blueprint**

**Frontend:**
<img src="images_readme/frontend_render.png" alt="Frontend on Render">

**Backend:**
<img src="images_readme/backend_render.png" alt="Backend on Render">

2. Connect your GitHub repository
3. Render reads `render.yaml` and deploys both services automatically

### Branch for Assignment 1
```bash
git checkout -b assignment1
# render.yaml is at root for this assignment
```

### Branch for Assignment 2
```bash
git checkout -b assignment2  
# Different render.yaml at root
```

### Step 7: Test Your Automated Deployment

**Blueprint Credentials:**
<img src="images_readme/render_credentialsimage.png" alt="Render credentials">

**Blueprint:**
<img src="images_readme/blueprint.png" alt="Blueprint">

### Step 8: The Final Outcome

After the Blueprint is created, the images should be automatically deployed:

**Frontend Auto-deploy:**
<img src="images_readme/fe-autodeploy.png" alt="Frontend auto-deploy">

**Backend Auto-deploy:**
<img src="images_readme/be-autodeploy.png" alt="Backend auto-deploy">

---

## Challenges Faced

- **Platform mismatch** — Docker images built on some laptops use ARM64 format, but Render needs AMD64. Fixed by specifying the platform during build. Render cloud servers run on AMD64 architecture, so I added `platform: amd64` in render.yaml to force building for AMD64.

- **Frontend to backend connection** — Frontend couldn't find backend API in production on Render. Windows development uses `http://localhost:5000` but that doesn't work on Render cloud. So I set `REACT_APP_API_URL` environment variable to point to Render backend URL (e.g., `https://a1-backend.onrender.com`)

- **Database connection** — PostgreSQL connection string from Render didn't work on Windows deployment. Windows required SSL to be explicitly enabled for secure database connections. Added `SSL_MODE: require` in database configuration

- **Root Directory** — I mismatched the root directory for the 3 important parts of this practical which caused render.yaml to be hindered, but I went through documentations and links from Render to understand the possible problems and their solutions. With brute force, I was able to successfully deploy the application.

---

## Conclusion
This project successfully containerised a full-stack To-Do app using Docker and deployed it on Render. The setup is fully automated — any code pushed to GitHub triggers a fresh deployment on Render, keeping the app always up to date.