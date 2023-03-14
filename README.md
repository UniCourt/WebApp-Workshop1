# Docker Workshop

One Day workshop on understanding Docker to package applications into containers—standardized executable components combining application source code with the operating system.

## Prerequisite

### Linux machine with following packages installed
  1. Install Ubuntu 22.04 LTS from [here](https://releases.ubuntu.com/22.04/)
  2. Install Git from your terminal by running following commands
     1. `sudo apt-get update`
     2. `sudo apt-get install git`
  3. Verify the installation was successful by typing
     1. `git --version`

### GitHub account
  1.  If you don't have the account on github then create an account on [GitHub](https://github.com/join)
  2.  Create a new work directory named `WORKSHOP`, by running following command in the terminal.
      1.  `mkdir WORKSHOP`
  3.  Fork the [current](https://github.com/UniCourt/WebApp-Workshop1) repository.
  4.  Clone your forked repository inside the `WORKSHOP` directory.
    
> **Info:**
> You can refer [this](https://docs.github.com/en/get-started/quickstart/fork-a-repo) guide to understand how to fork and clone

### Docker instalation
  1.  To install docker follow the below mentioned steps.
      1.  [Set up the repository](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository:~:text=from%20the%20repository.-,Set%20up%20the%20repository,-Update%20the%20apt)
      2.  [Install Docker Engine](https://docs.docker.com/engine/install/ubuntu/#:~:text=/dev/null-,Install%20Docker%20Engine,-Update%20the%20apt)
  2. Configure docker to run without sudo.
     1. [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/)
  3. Install Docker-compose by running the follwing command:
      - The following command will download the 2.16.0 release and save the executable file at /usr/local/bin/docker-compose, which will make this software globally accessible as docker-compose:
         ```
         curl -SL https://github.com/docker/compose/releases/download/v2.16.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
         ```
      - Set the correct permissions so that the docker-compose command is executable:
         ```
         sudo chmod +x /usr/local/bin/docker-compose
         ```
      - To verify that the installation was successful, you can run:
         ```
         docker-compose --version
         ```
         You’ll see output similar to this:
         ```
         Output
         docker-compose version 2.16.0, build 5becea4c
         ```
         Docker Compose is now successfully installed on your system.
  4. Download the follwing docker images to your local machine  
     1. `docker pull node:18.15.0-alpine3.17`
        1. Verify the image is pulled into your local machine
        2. `docker run --rm -ti node:18.15.0-alpine3.17 node -v`
        3. Output: **v18.15.0**
     2. `docker pull postgres:14-alpine`
        1. Verify the image
        2. `docker run --rm -ti postgres:14-alpine  psql -V`
        3. Output: **psql (PostgreSQL) 14.5**
     3. `docker pull nginx:1.23.0-alpine`

## What will you learn by the end of this workshop?
- By the end of this workshop you will understand what Docker and how it is containerized for the applications
- How Javascript works in the browser
- Async / await in Javascript
- API based node js application with express framework

## To Do
   Follow this tutorial and try it on your local machine <br/>
   [`Node application setup`](holiday-app/README.md)
## **Schedule**
| Time                    |   Topics
| --                      |   --
| 09:00 - 11.00           |  [`Docker`](docs/Docker.pdf)
| 11.15 - 01.00           |  [`Git`](git/github_intro.md)
| 1.00  - 2.00            |  [ `Break` ]
| 2.00  - 2.30            |  [`Javascript`](docs/Javascript_&_NodeJS.pdf)
| 2.30  - 3.00            |  [`Typescript`](docs/TypeScript.pdf)
| 3.00  - 5.00            |  [ `Node js` ](holiday-app/README.md) 