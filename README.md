# Node Workshop 1
## Prerequisites
 - Any Linux machine/VM with following packages installed
 - Docker  ( https://docs.docker.com/engine/install/ubuntu/ )
     * To install docker go to your cloned repository and run the following command
     * `sudo prerequisites/install_docker.sh`
 - Git     ( https://www.makeuseof.com/install-configure-git-on-linux/ )
     * Create an account on GitHub (if you don't already have one)
     * Fork [this](https:https://github.com/UniCourt/WebApp-Workshop1) repository and then clone it to your machine
     * You can refer [this](https://docs.github.com/en/get-started/quickstart/fork-a-repo) guide to understand how to fork and clone

 - VS code IDE ( https://linuxize.com/post/how-to-install-visual-studio-code-on-ubuntu-20-04/ )
 - Internet Connection
 
## Workshop environment setup 
 - git pull 'repo-name'
 - cd 'repo-name'
 - docker-compose up
 - open up http://localhost:3000/ in your browser
 - you should see ### Welcome to Nodejs WorkShop ### in the screen

## Get API key for themoviedb
 - create a account in https://www.themoviedb.org/
 - go to https://www.themoviedb.org/settings/api and copy API Key (v3 auth)

## Accesing TMDB API 
 - Fetch 200 movies using TMDB API starting movie Id from 100. 
 - Keep a 1 second delay after every request
 - Read and save the necessary information from the response to the database (refer database schema)
 - Other API which needs to be called and saved to the database
      * credits
      * recommendations
      * reviews
 - We shall create a express application to expose these API.
 - An example on how to access TMDB API is present in tmdb_api.js. Replace " api_key " in the URL with your API key



   
