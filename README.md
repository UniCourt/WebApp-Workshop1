# Docker Workshop

One Day workshop on understanding Docker to package applications into containers—standardized executable components combining application source code with the operating system.

## Prerequisite

### Linux machine with following packages installed
  1. Install Ubuntu 22.04 LTS from [here](https://releases.ubuntu.com/22.04/)
  2. Install Git from your terminal by running following commands
     -   ```
         sudo apt-get update
         ```
     -   ```
         sudo apt-get install git
         ```
  3. Verify the installation was successful by typing
     -   ```
         git --version
         ```

### GitHub account
  1.  If you don't have the account on github then create an account on [GitHub](https://github.com/join)
  2. Configure SSH key by following the below steps
      - [Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
      - [Adding your SSH key to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
      - To list all contents of ssh folder
         ```
         ls -al ~/.ssh
         ```
      - To instal xclip
         ```
         sudo apt install xclip
         ```
      - Copy ssh key
         ```
         xclip -sel clip < ~/.ssh/id_ed25519.pub
         ```
      - [Adding a new SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account)
  3.  Create a new work directory named `WORKSHOP` inside the `/home` directory, by running following command in the terminal.
      -  ```
         mkdir WORKSHOP
         ```
  4.  Fork the [current](https://github.com/UniCourt/WebApp-Workshop1) repository.
  5.  Clone your forked repository inside the `WORKSHOP` directory.
    
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
         sudo curl -SL https://github.com/docker/compose/releases/download/v2.16.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
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
     -   ```
         docker pull node:18.15.0-alpine3.17
         ```
         - Verify the image is pulled into your local machine
           ``` 
            docker run --rm -ti node:18.15.0-alpine3.17 node -v
            ```
            Output: **v18.15.0**
     -   ```
         docker pull postgres:14-alpine
         ```
         - Verify the image
            ```
            docker run --rm -ti postgres:14-alpine  psql -V
            ```
            Output: **psql (PostgreSQL) 14.5**
     -   ```
         docker pull nginx:1.23.0-alpine
         ```

### VS Code setup
   - [Install VS Code](https://code.visualstudio.com/Download)
   - [Install Docker extension on your VS Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

## What will you learn by the end of this workshop?
- By the end of this workshop you will understand what Docker and how it is containerized for the applications.
- You will know the concepts of javascript & typescript.
- Build basic application on nodejs using javascript/typescript.

## **Schedule**
| Time                    |   Topics
| --                      |   --
| 09:00 - 10:15           |  [`Git`](/Git/Git_Workshop.pdf)
| 10:15 - 10:30           |  [ `Tea Break` ]
| 10:30 - 01:00           |  [`Docker`](/Docker/Docker.pdf)
| 1:00  - 2:00            |  [ `Break` ]
| 2:00  - 3:00            |  [`Javascript & Typescript`](/JS%20and%20TS/JavaScript%20and%20Typescript.pdf)
| 3:00  - 5:00            |  [ `Node Js` ](/NodeJs/NodeJs.pdf)