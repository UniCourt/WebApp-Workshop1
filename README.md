# Docker Workshop

One Day workshop on understanding Docker to package applications into containers—standardized executable components combining application source code with the operating system.

## Prerequisite

### Linux machine/VM with following packages installed
  1. Install Ubuntu 20.04.4 LTS from [here](https://releases.ubuntu.com/20.04/)
  2. Install Git from your terminal by running follwing commands
     1. `$ sudo apt-get update`
     2. `$ sudo apt-get install git`
     3. Verify the installation was successful by typing
     4. `$ git --version`

### GitHub account
  1.  Create an account on [GitHub](https://github.com/join) (if you don't already have one)
alt  2.  Create a directory named WORKSHOP, RUn the command in the terminal (`ctrl+shift+t`)
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
     2. `$ apt-get install docker-compose`
     3. Verify the installed version with the following command
     4. `$ docker-compose --version`
     5. Output: docker-compose version 1.25.0
  4. `$ docker run hello-world` to explore more

## What will you learn by the end of this workshop?
- By the end of this workshop you will understand what Docker and how it is containerized for applications
- 

## **Schedule**
| Time                    |   Topics
| --                      |   --
| 09:00 - 10.00           |  [`Introduction to Docker`](docs/Docker.pdf)
| 10.00 - 11.00           |  Docker excersize
| 11.00 - 11.15           |  [ `Q & A section` ] 
| 11.15 - 12.00           |  [`Javascript Intruduction`](docs/Javascript_NodeJS.pdf)
| 12.00 - 12.30           |  [`Javascript exercise`](playground/README.md)
| 12.30 - 1.00            |  [`Intruduction to Type script & Node JS`](docs/Javascript_NodeJS.pdf)
| 1.00  - 2.00            |  [ `Break` ]
| 2.00  - 4.00            |  [ `Node JS exercise` ](holiday-app/README.md) 