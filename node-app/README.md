# Building Express APP with TMDB API 
  
## Bring up the application with Docker-compose
 - **Open terminal & navigate to the folder `workshop/WebApp-Workshop1/node-app`**
 - Build the image
   - `docker-compose build`
 - Initialize the postgres
   - `docker-compose up -d postgres`
   - Note: As PostgreSQL init some process to initialize the database
 - Now bring the node & postgres app together
   - `docker-compose up -d`
 - Open up http://localhost:3000/ in your browser
 - You should see **Welcome to Nodejs WorkShop** in the screen

## Load database schema for Movie API
 - Import database schema and create tables
   - `docker exec -i postgres-db psql -U admin_user -d movie_db  < schema/movie.sql`
     - You should see a message CREATE TABLE
 - Open new terminal & login to the databse using password
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


# Building Express APP with Public Holiday API

## Explore Public Holiday API
- Go to the link https://date.nager.at/Api
- Check out the example API which returns the public holidays from a given year and country.
  - 2017/AT
- Click on API documentation 
  - Expand **/api/v3/AvailableCountries**
  - Click on try it out and execute
  - A list of available countries is returned from this public API
  - Expand  **/api/v3/PublicHolidays/{year}/{countryCode}**
  - Click on try it out and fill the form
    - year: 2017
    - countryCode: AT
  - Click on Execute
    - The lsit of holidays is returned

- Now let us call this public API from our Express APP and insert data into  the database


## Load database schema for Public Holiday API
- Open a terminal
- Import database schema and create tables
   - `docker exec -i postgres-db psql -U admin_user -d movie_db  < schema/holiday.sql`
     - You should see a message CREATE TABLE
 - Verify the schema from terminal previosly logged in to the database
   - `movie_db=# \d`
 - `country` & `holiday` new tables are added

## Fetch info from Public Holiday API 
- First let us get the available list of countries
- Open a new tab and go to http://localhost:3000/list-countries
  - Available country code is listed here. Make a note we use only these country code to fetch the holiday information
- Let us get the information country US and the year 2018 using [curl](https://curl.se/docs/)
- Open a terminal and run the following command
  ```
  curl -X POST -d "year=2018&counryCode=US" http://localhost:3000/country-holiday
  ```
  - You should see the response as status `success` and data
- Verfify if data is inserted into your database
  - `SELECT * FROM country;`
  - `SELECT * FROM holiday;`
- Let us try to fetch the same country and year once again 
  ```
  curl -X POST -d "year=2018&counryCode=US" http://localhost:3000/country-holiday
  ```
  - You should see the response as status `fail`
  - **Note**: Country and Year should be unique
- Let us try one more API. Fetch the holiday list for country AT and year 2017 
  ```
  curl -X POST -d "year=2017&counryCode=AT" http://localhost:3000/country-holiday
  ```
- Add few more data using `curl` by changing the year and the country code from available countries
