# Unit 6: GitHub Actions

---

## What is GitHub Actions?

GitHub Actions is a tool inside GitHub that automatically runs tasks when something happens in your project. For example, every time you push code, it can automatically run your tests for you — no manual work needed.

> One important thing — GitHub Actions does **not** host your website. It only runs the automation. Hosting is done by Render.

---

## Importance of GitHub Actions:


## Where the File Goes

You need to put your workflow file in this exact location:

```
.github/workflows/your-file-name.yml
```

If it's in the wrong place, GitHub won't find it and nothing will run.

---

## The 6 Core Parts

| Part | What it is |
|------|-----------|
| **Workflow** | The whole automation file you write |
| **Event** | What starts the workflow (e.g. pushing code) |
| **Job** | A group of steps that run together |
| **Step** | One single task inside a job |
| **Action** | Ready-made code you can reuse |
| **Runner** | The computer GitHub gives you to run the job |

How they connect:

```
Event → Workflow starts → Job runs on Runner → Steps execute → Done
```

---

## Basic Workflow File

```yaml
name: My Workflow           # Name shown in GitHub UI

on: [push]                  # Runs when you push code

jobs:
  build:
    runs-on: ubuntu-latest  # Use an Ubuntu computer

    steps:
      - uses: actions/checkout@v4   # Always first — gets your code
      - run: echo "Hello World"     # Runs a command
```

---

## A.  Workflow

A workflow is the whole automation process where the application is build, test or deployed.

## B. Events(`on:`) — What Starts a Workflow

| Event | When it runs |
|-------|-------------|
| `push` | When you push code to GitHub |
| `pull_request` | When a pull request is opened |
| `workflow_dispatch` | When you manually click run in GitHub UI |
| `schedule` | At a set time, like every night at midnight |

for eg:

```bash 
on:
  push:
```

---

## C. Job 

It is a group of tasks

for eg:

```bash
jobs:
  build:
```

Instead of build we can ise test and deploy.

---

## D. Runner

It the computer that does the work or the job

for eg: Ubuntu, Windows and macOS

```bash
runs-on: ubuntu-latest
```

---

## E. Steps

Steps are the individual commands or tasks that are done at a time.

---

## F. Actions

Actions are ready made tools created by GitHub or other platforms, that are pre-built or in-build.

---

### Secrets — Never Write Passwords in the File

Go to: **GitHub repo → Settings → Secrets and variables → Actions**

Add your password there, then use it like this:

```yaml
env:
  MY_PASSWORD: ${{ secrets.MY_PASSWORD }}
```

GitHub hides it automatically so it never shows up in logs.

---

### Caching — Avoid Re-downloading Every Time

```yaml
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
```

Without this, your workflow downloads all packages fresh every single run. Caching saves them so the next run is much faster.

---

### Artifacts — Save Files After a Job

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: test-results
    path: reports/
```

By default, everything on the runner disappears when the job ends. Artifacts let you save files like test reports so you can download them later.

---

## GitHub Actions vs Render

| | GitHub Actions | Render |
|-|----------------|--------|
| Runs tests | ✅ Yes | ❌ No |
| Hosts website | ❌ No | ✅ Yes |
| How long it runs | A few minutes | 24/7 |

**Simple rule — Actions builds and tests. Render hosts and deploys.**

---

## Quick Summary

- Workflow files go in `.github/workflows/` and end in `.yml`
- Checkout must **always** be the first step
- Runners are fresh every time — nothing carries over
- Never put passwords in the file — use Secrets
- `uses` calls a pre-built action, `run` runs a shell command
- GitHub Actions = test and build | Render = host and deploy

---

