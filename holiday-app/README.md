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

## Load database schema for Holiday API
 - Navigate to the foler from terminal `/workshop/WebApp-Workshop1/holiday-app/`
 - Initalize postgres 
   - `docker-compose up postgres -d`
 - Import database schema and create tables
   - `docker exec -i postgres-db psql -U node_user -d holiday_db  < schema/holiday.sql`
     - You should see a message CREATE TABLE
 - Open new terminal & login to the databse using password
   - `docker exec -it postgres-db psql -U admin_user -d holiday_db  -W`
 - Check if all the tables are loaded
   - `holiday_db=# \d`
 - Note: You should see all the relations

## Bring up the node app
- From the same file location run the following command
- `docker-compose up`
- You should see a message
  - Express app is running on port 3000
- Open `http://localhost:3000/` in your browser
  - You should see **Hello world** message
