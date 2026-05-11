# DSO101 Notes

**Course:** DS0101 - Continuous Integration and Continuous Deployment  
**Program:** Bachelor's Engineering in Software Engineering (SWE)  
**Student:** Pema Rinzin Deolkar  
**GitHub Repository:** [DSO101_02250349](https://github.com/Dechen-Wangmo-2025/DSO101.git)

---

## Table of Contents

- [Unit 1: Introduction to Docker](#unit-1-introduction-to-docker)
- [Unit 2: Docker Images and Containers](#unit-2-docker-images-and-containers)
- [Unit 3: Dockerfile and Docker Compose](#unit-3-dockerfile-and-docker-compose)
- [Unit 4: CI/CD and Jenkins](#unit-4-cicd-and-jenkins)
- [Unit 5: Advanced Pipeline](#unit-5-advanced-pipeline)

---

# Unit 1: Introduction to Docker

## What is Docker?
Docker is a tool used to create, run, and manage containers.

A container is a lightweight package that contains:
- Application code
- Libraries
- Dependencies
- Runtime environment
This helps applications run the same way on every computer.

## Significance of Docker?

Before Docker:
- Applications worked differently on different systems
- Dependency issues occurred frequently
- Deployment was slow

After Docker:
- Consistent environments
- Easy deployment
- Faster development

---

## Features of Docker

- Lightweight
- Portable
- Fast startup
- Scalable
- Isolated environments

---

## Docker Components

- **Docker Engine** - Main serivce that runs the Docker.
- **Docker Client** – Command line interface (CLI)
- **Docker Daemon** – Background service that manages containers
- **Docker Images** – Read-only blueprints for containers used to create containers
- **Docker Containers** – Running instances of images
- **Docker Registry** – Stores Docker images (e.g., Docker Hub)

---

## Docker vs Virtual Machines

| Feature | Docker (Containers) | Virtual Machines |
|---------|---------------------|------------------|
| Size | Lightweight (MBs) | Heavy (GBs) |
| Boot Time | Seconds | Minutes |
| Performance | Near-native | Slower (hypervisor overhead) |
| Isolation | Process-level | Full OS |
| Resource Usage | Shares host OS kernel | Dedicated OS per VM |

## Docker Workflow

```text
Dockerfile → Docker Image → Docker Container
```

---

## Docker Architecture
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Docker │────▶│ Docker │────▶│ Container │
│ Client │ │ Daemon │ │ (Running) │
└─────────────┘ └─────────────┘ └─────────────┘
│
▼
┌─────────────┐
│ Docker │
│ Images │
└─────────────┘

## Basic Commands

```bash
# Check Docker version
docker --version
<img src="git.notes.image/1.png" alt=" ">

docker info 
It displays system-wide information
<img src="git.notes.image/2.png" alt=" ">

docker help
It helps get hellp from other Docker commands
<img src="git.notes.image/3.png" alt=" ">

docker ps


docker ps -a
It lists all containers including those which are stopped.