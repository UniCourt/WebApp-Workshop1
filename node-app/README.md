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
 - Create a account in https://www.themoviedb.org/
 - Co to https://www.themoviedb.org/settings/api 
 - Co to Request an API Key and select Developer
 - Accept the terms and condition and fill up the form
 - Copy API Key (v3 auth) & paste in in `controller/tmdb_api.js` file
 - Go to the URL http://localhost:3000/movie-info/{`movie-id`}
 - Verify if API data is inserted into the database
   - `SELECT * FROM movie;`

## Accesing TMDB API 
 - Fetch 50 movies using TMDB API starting movie Id from 100. 
 - Keep a 1 second delay after every request
 - Read and save the necessary information from the response to the database (refer database schema)
 - Other API which needs to be called and saved to the database
      * credits
      * recommendations
      * reviews
 - We shall create a express application to expose these API.
 - An example on how to access TMDB API is present in tmdb_api.js. Replace " api_key " in the URL with your API key



   