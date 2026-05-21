# Linux & Docker Notes

A personal reference I put together while learning Linux and Docker. Nothing fancy — just the commands I actually use, grouped in a way that makes sense to me.

---

# Linux Commands

These are the commands you'll type dozens of times every day.

| Command | What it does |
| :--- | :--- |
| `pwd` | Shows where you are right now |
| `ls` | Lists files in the current folder |
| `ls -la` | Lists everything, including hidden files, with details |
| `cd foldername` | Go into a folder |
| `cd ..` | Go up one level |
| `cd ~` | Jump to your home directory |
| `cd /` | Jump to the root of the system |
| `clear` | Clears the screen (or just press `Ctrl + L`) |

> **Tip:** Hidden files start with a dot (`.bashrc`, `.gitconfig`). You won't see them with plain `ls` — add the `-a` flag.

---

## Files and Folders

| Command | What it does |
| :--- | :--- |
| `mkdir foldername` | Create a new folder |
| `mkdir -p parent/child/grandchild` | Create nested folders in one go |
| `touch filename.txt` | Create an empty file |
| `cp file1.txt file2.txt` | Copy a file |
| `cp -r folder1 folder2` | Copy an entire folder |
| `mv oldname.txt newname.txt` | Rename or move a file |
| `rm filename.txt` | Delete a file |
| `rm -r foldername` | Delete a folder and everything inside |
| `rm -f filename.txt` | Force delete without asking for confirmation |

> **Warning:** Linux doesn't have a trash bin. `rm` deletes things permanently — double-check before hitting enter.

---

## Reading Files

| Command | What it does |
| :--- | :--- |
| `cat filename.txt` | Print the whole file to the screen |
| `less filename.txt` | Read the file page by page (press `q` to quit) |
| `head filename.txt` | Show the first 10 lines |
| `head -n 20 filename.txt` | Show the first 20 lines |
| `tail filename.txt` | Show the last 10 lines |
| `tail -f filename.txt` | Watch a file update in real time (great for logs) |
| `nl filename.txt` | Print the file with line numbers |

---

## Searching

| Command | What it does |
| :--- | :--- |
| `grep "word" filename.txt` | Search for a word inside a file |
| `grep -i "word" filename.txt` | Same but case-insensitive |
| `grep -r "word" /some/folder` | Search inside every file in a folder |
| `grep -v "word" filename.txt` | Show lines that do NOT contain the word |
| `find /path -name "filename"` | Find a file by name |
| `find /path -type d -name "foldername"` | Find a folder by name |
| `which python` | Show where a command lives on the system |

**Combining with pipes:**
```bash
# Find how many .txt files exist
ls | grep ".txt" | wc -l

# Check if a process is running
ps aux | grep "nginx"
```

---

## Permissions

Every file has three permission sets: **owner**, **group**, and **everyone else**. Each can have read (`r`=4), write (`w`=2), and execute (`x`=1) access.

| Command | What it does |
| :--- | :--- |
| `chmod 755 script.sh` | Owner can do everything; others can read and run |
| `chmod 644 file.txt` | Owner can read/write; others can only read |
| `chmod +x script.sh` | Make a file executable |
| `chown user:group file.txt` | Change who owns a file |
| `sudo somecommand` | Run a command as admin (superuser) |
| `whoami` | Check which user you're logged in as |

**Quick permission number guide:**

| Number | Meaning |
| :--- | :--- |
| 7 | Read + Write + Execute |
| 6 | Read + Write |
| 5 | Read + Execute |
| 4 | Read only |

---

## Processes

| Command | What it does |
| :--- | :--- |
| `ps` | Show your running processes |
| `ps aux` | Show all running processes |
| `top` | Live view of all processes (press `q` to exit) |
| `htop` | Nicer version of `top` (may need to install) |
| `kill 1234` | Stop a process by its ID (PID) |
| `kill -9 1234` | Force-kill a process that won't stop |
| `pkill nginx` | Kill a process by name |
| `command &` | Run a command in the background |
| `jobs` | See what's running in the background |
| `fg` | Bring a background job to the foreground |

---

## System Info

| Command | What it does |
| :--- | :--- |
| `date` | Current date and time |
| `uptime` | How long the system has been running |
| `uname -a` | Kernel and OS details |
| `df -h` | Disk space usage (human-readable) |
| `du -sh /some/folder` | How big a specific folder is |
| `free -h` | RAM usage |
| `history` | Your recent command history |
| `who` | See who's logged into the system |

---

## Networking

| Command | What it does |
| :--- | :--- |
| `ping google.com` | Check if you can reach something (press `Ctrl+C` to stop) |
| `ip addr show` | See your IP addresses |
| `curl https://example.com` | Fetch content from a URL |
| `wget https://example.com/file.zip` | Download a file |
| `ssh user@192.168.1.10` | Connect to a remote server |
| `scp file.txt user@server:/path/` | Copy a file to a remote server securely |

---

## Archives and Compression

**The most common ones:**

```bash
# Create a .tar.gz archive
tar -cvzf archive.tar.gz myfolder/

# Extract a .tar.gz archive
tar -xvzf archive.tar.gz

# Create a .zip file
zip -r archive.zip myfolder/

# Extract a .zip file
unzip archive.zip
```

**tar flag reference:**

| Flag | Meaning |
| :--- | :--- |
| `-c` | Create |
| `-x` | Extract |
| `-v` | Verbose (shows progress) |
| `-z` | Use gzip compression |
| `-f` | Specify the filename |

---

## Pipes and Redirection

This is one of the most powerful things about Linux — chaining commands together.

| Symbol | What it does |
| :--- | :--- |
| `>` | Send output to a file (overwrites) |
| `>>` | Append output to a file |
| `\|` | Pass output of one command into another |
| `&&` | Run second command only if first succeeds |
| `;` | Run commands one after another regardless |

```bash
# Examples
echo "hello" > notes.txt          # Write to file
echo "world" >> notes.txt         # Append to same file
cat notes.txt | sort | uniq       # Sort and remove duplicates
history | grep "docker"           # Find past docker commands
```

---

## Users

| Command | What it does |
| :--- | :--- |
| `sudo useradd username` | Create a new user |
| `sudo userdel username` | Delete a user |
| `passwd username` | Change a user's password |
| `su username` | Switch to another user |
| `groups username` | See what groups a user belongs to |
| `sudo groupadd groupname` | Create a new group |

---

## Keyboard Shortcuts

These save a lot of time once they become muscle memory.

| Shortcut | What it does |
| :--- | :--- |
| `Tab` | Auto-complete a command or filename |
| `↑ / ↓` | Scroll through command history |
| `Ctrl + C` | Kill the current command |
| `Ctrl + Z` | Pause the current command |
| `Ctrl + R` | Search through command history |
| `Ctrl + L` | Clear the screen |
| `Ctrl + A` | Jump to the beginning of the line |
| `Ctrl + E` | Jump to the end of the line |
| `!!` | Repeat the last command |

---

# Docker Commands

## Images

An image is the blueprint. A container is what runs from that blueprint.

| Command | What it does |
| :--- | :--- |
| `docker pull ubuntu:latest` | Download an image from Docker Hub |
| `docker images` | List all images you have locally |
| `docker rmi imagename` | Delete an image |
| `docker image prune -a` | Delete all images that aren't being used |
| `docker build -t myapp .` | Build an image from a Dockerfile in the current folder |
| `docker tag myapp:latest myapp:v1.0` | Give an image a version tag |
| `docker push username/myapp` | Upload an image to Docker Hub |
| `docker search nginx` | Search for images on Docker Hub |

---

## Containers

| Command | What it does |
| :--- | :--- |
| `docker run ubuntu` | Create and start a container |
| `docker run -it ubuntu bash` | Start a container and open a shell inside it |
| `docker run -d nginx` | Start a container in the background |
| `docker run --name mybox ubuntu` | Give your container a name |
| `docker run --rm ubuntu` | Auto-delete the container when it stops |
| `docker run -p 8080:80 nginx` | Map port 80 in the container to port 8080 on your machine |
| `docker run -e ENV_VAR=value image` | Pass an environment variable into the container |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers including stopped ones |
| `docker stop name` | Gracefully stop a container |
| `docker start name` | Start a stopped container again |
| `docker restart name` | Restart a container |
| `docker rm name` | Remove a stopped container |
| `docker rm -f name` | Force-remove a container (even if running) |
| `docker container prune` | Remove all stopped containers at once |
| `docker exec -it name bash` | Open a shell in a running container |
| `docker exec name ls /app` | Run a single command inside a container |
| `docker cp file.txt name:/app/` | Copy a file from your machine into a container |
| `docker cp name:/app/file.txt .` | Copy a file out of a container |

---

## Container Status and Exit Codes

When you run `docker ps -a`, the STATUS column tells you what happened.

### Status Labels

| Status | What it means |
| :--- | :--- |
| `Created` | Container was created but never started |
| `Up 3 hours` | Currently running |
| `Exited (0)` | Finished successfully |
| `Exited (1)` | Crashed with an error |
| `Exited (137)` | Was force-killed (usually out of memory) |
| `Exited (130)` | You pressed `Ctrl+C` |
| `Exited (143)` | Stopped gracefully via `docker stop` |
| `Restarting` | Keeps crashing and restarting |
| `Paused` | Manually paused with `docker pause` |
| `Dead` | Broken state — usually needs `docker rm` |

### Exit Code Reference

| Code | Cause | What to do |
| :--- | :--- | :--- |
| `0` | Success | Nothing — all good |
| `1` | General error | Run `docker logs containername` |
| `127` | Command not found | Check your CMD/ENTRYPOINT in Dockerfile |
| `137` | Out of memory or force-killed | Check memory limits or run `docker logs` |
| `130` | Ctrl+C | Normal if you did it intentionally |
| `143` | Graceful shutdown | Normal |

**How to check exit codes:**
```bash
# See status of all containers
docker ps -a

# Get the exact exit code
docker inspect containername --format='{{.State.ExitCode}}'

# Filter containers that exited with an error
docker ps -a --filter "exited=1"
```

---

## Networking in Docker

By default, containers are isolated. You have to explicitly set up how they talk to each other or to the outside world.

| Command | What it does |
| :--- | :--- |
| `docker network ls` | List all networks |
| `docker network create mynet` | Create a custom network |
| `docker network inspect bridge` | See details about a network |
| `docker network rm mynet` | Delete a network |
| `docker network connect mynet container1` | Add a container to a network |
| `docker network prune` | Remove all unused networks |

**Network types:**

| Type | When to use it |
| :--- | :--- |
| `bridge` | Default — good for most single-host setups |
| `host` | Container shares the host's network (faster, less isolated) |
| `none` | No network access at all |
| `overlay` | Multi-host setups (Docker Swarm) |

**Port mapping examples:**
```bash
# Host port 8080 → container port 80
docker run -p 8080:80 nginx

# Let Docker pick a random host port
docker run -P nginx

# Map multiple ports
docker run -p 8080:80 -p 8443:443 nginx
```

---

**Build commands:**
```bash
docker build -t myapp .                          # Build with a tag
docker build --no-cache -t myapp .               # Build fresh (skip cache)
docker build -f Dockerfile.prod -t myapp:prod .  # Use a specific Dockerfile
```

---

## Logs, Inspection, and Cleanup

| Command | What it does |
| :--- | :--- |
| `docker logs name` | View a container's output |
| `docker logs -f name` | Follow the logs live |
| `docker logs --tail 100 name` | Show the last 100 lines |
| `docker inspect name` | Get everything about a container in JSON |
| `docker stats` | Live CPU/memory usage across all containers |
| `docker top name` | See what processes are running inside a container |
| `docker diff name` | See what files have changed inside a container |
| `docker events` | Watch Docker activity in real time |

---
