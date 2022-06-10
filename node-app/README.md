# Building Express APP with TMDB API
  
## Bring up the application with Docker-compose
 - **Navigate to the folder `workshop/WebApp-Workshop1/node-app`**
 - `docker pull node:alpine3.15`
 - `docker pull postgres:13-alpine`
 - Buiild the image
   - `docker-compose build`
 - Initialize the postgres
   - `docker-compose up postgres`
   - Note: As PostgreSQL init some process to initialize the database
   - After the init process complete bring down the postgres
   - `docker-compose down`
 - Now bring the node & postgres app together
 - `docker-compose up`
 - open up http://localhost:3000/ in your browser
 - you should see **Welcome to Nodejs WorkShop** in the screen

## Load database schema
 - Import database schema and create tables
 - `docker exec -i postgres-db psql -U admin_user -d movie_db  < schema/movie.sql`
 - Now login to the databse using password
 - `docker exec -it postgres-db psql -U admin_user -d movie_db  -W`
 - Check if all the tables are loaded
 - `movie_db=# \d`
 - Note: You should see all the relations


## Get API key for themoviedb
 - Create an account in https://www.themoviedb.org/signup
 - Go to https://www.themoviedb.org/settings/api 
 - Go to Request an API Key and select Developer
 - Accept the terms and condition and fill up the form
 - Copy API Key (v3 auth) & paste in in `controller/tmdb_api.js` file
   - Replace `<api-key-here>` with your API key
 - Go to the URL http://localhost:3000/movie-info/{`movie-id`}
   - Enter a movie-id between 100 and 500
   - E.g. Go To `http://localhost:3000/movie-info/500`
 - Verify if API data is inserted into the database
   - `SELECT * FROM movie;`




   
