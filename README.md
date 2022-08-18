# Docker Workshop

One Day workshop on understanding Docker to package applications into containers—standardized executable components combining application source code with the operating system.

## Prerequisite

### Linux machine/VM with following packages installed
  1. Install Ubuntu 20.04.4 LTS from [here](https://releases.ubuntu.com/20.04/)
  2. Install Git from your terminal by running following commands
     1. `$ sudo apt-get update`
     2. `$ sudo apt-get install git`
     3. Verify the installation was successful by typing
     4. `$ git --version`
  3. Install [curl](https://curl.se/docs/manual.html) and [jq](https://stedolan.github.io/jq/) by running commands
     1. `$ sudo apt install curl`
     2. `$ sudo apt install jq`

### GitHub account
  1.  If you don't have the account on github then create an account on [GitHub](https://github.com/join)
  2.  Create a directory named WORKSHOP, run the command in the terminal (`ctrl+shift+t`)
      1.  `$ mkdir WORKSHOP`
  3.  Fork [this](https://github.com/UniCourt/WebApp-Workshop1) repository and then clone it inside the WORKSHOP directory
  4.  You can refer [this](https://docs.github.com/en/get-started/quickstart/fork-a-repo) guide to understand how to fork and clone

### Docker instalation
  1.  To install docker go to your cloned repository and run the following command from the terminal
      1.  `$ cd WORKSHOP/WebApp-Workshop1/`
      2.  `$ sudo chmod +x prerequisites/install_docker.sh`
      3.  `$ sudo apt-get update`
      4.  `$ sudo prerequisites/install_docker.sh`
  2. Verify Docker is installed 
     1. `$ sudo docker -v`
     2. Output : Docker version 20.10.12, build e91ed57`
  3. Install Docker-compose by running the follwing command
     1. `$ sudo apt-get update`
     2. `$ sudo apt-get install docker-compose`
     3. Verify the installed version with the following command
     4. `$ sudo docker-compose --version`
     5. Output: docker-compose version 1.25.0
  4. Verify docker is installed 
     1. `$ sudo docker run hello-world` 
     2. Go through the output
  5. Download the follwing docker images to your local machine
     1. `$ sudo docker pull node:16.16.0-alpine3.15`
        1. Verify the image is pulled into your local machine
        2. `sudo docker run --rm -ti node:16.16.0-alpine3.15 node -v`
        3. Output: **v16.16.0**
     2. `$ sudo docker pull postgres:14-alpine`
        1. Verify the image
        2. `sudo docker run --rm -ti postgres:14-alpine  psql -V`
        3. Output: **psql (PostgreSQL) 14.5**

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
| 2.00  - 2.30            |  [`Javascript](docs/Javascript_&_NodeJS.pdf)
| 2.30  - 3.00            |  [`Typescript`](docs/TypeScript.pdf)
| 3.00  - 5.00            |  [ `Node js` ](holiday-app/README.md) 