# Render

---

## What is Render?

Render is a cloud platform that hosts your application online. Render will automatically deploy, without manual deployment, everytime code is updated with commit on to GitHub. Render focuses on the server side.

## Render helps to run:

- Frontend Websites like React, Vite, HTML/CSS/JS.
- Backend apps like Flask, Node.js Django, etc/
- Databases like PostgreSQL
- Static Websites.

---

> Render handles the **hosting and deployment** side. GitHub Actions handles the **testing and building** side.

---

## How to Connect Render to GitHub

1. Sign up at Render.com using your GitHub account
2. Click **New → Web Service**  
3. Connect your GitHub repository
4. Set your **build command** (e.g. `npm install`)
5. Set your **start command** (e.g. `npm start`)

After that, every `git push` triggers a new deployment automatically.

---

## How Render Deploys Your App

Every time you push code, Render follows these steps:

1. Step 1: Push Project to GitHub

**Commands:**

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_LINK
git push -u origin main
```

----

2. Step 2: Create New Service
- Choose static site or Web service

---

3. Step 3: Configure Settings

> Build and Start commands are important for configuring the app. Such as:

- Vite React app :
Build command 
```bash
npm install && npm run build
```

- Flask App:
Build Command
```bash
pip install -r requirements.txt  # the requirements.txt must be in the root directory(by default)
```

Start Command

```bash
gunicorn app:app
```

- gunicorn is commonly used for Flask deployment


### If anything fails, Render stops and keeps the old version running — so your app never goes down.

---
## Important Points I learned

### Port Binding
Your app must listen on `process.env.PORT` — not a fixed port number. Render injects this automatically at runtime.

```js
const port = process.env.PORT || 3000;
app.listen(port);
```

### Environment Variables

It stores secret vakues such as API keys and Database passwords and secret keys.
It has the `KEY and VALUE`
Never put passwords or API keys in your code. Add them in the Render dashboard instead — they get injected into your app at runtime.

### Auto-Deploy
By default, every push triggers a deployment. You can turn this off if you want manual control.

### Rollback
If a deployment goes wrong, you can click **Rollback** in the dashboard to go back to the previous working version.

---

## Blue-Green Deployment

Render uses `blue-green` deployment — this means the new version starts up alongside the old version. Traffic only switches to the new version once it passes the health check. This is why your app has **zero downtime** during deployments.

---

## Pre-Deployment Checklist

Before pushing to Render, make sure:

- App runs locally using a `PORT` environment variable
- Start command works without errors
- No passwords are hardcoded in the code
- You are pushing to the correct connected branch to GitHub

---

## Quick Summary

- Render = cloud hosting + automatic deployment
- Every `git push` → Render builds and deploys automatically
- Use `process.env.PORT` for port binding
- Store secrets in the Render dashboard, not in code
- If deployment fails, old version keeps running
- Rollback is one click away

---
