# Building Express APP with Public Holiday API

## Explore Public Holiday API
1. Go to the link https://date.nager.at/Api
2. Check out the example API which returns the public holidays from a given year and country.
   1. 2017/AT
3. Click on API documentation 
   1. Expand **/api/v3/AvailableCountries**
   2. Click on try it out and execute
   3. A list of available countries is returned from this public API
4. Expand  **/api/v3/PublicHolidays/{year}/{countryCode}**
   1. Click on try it out and fill the form
   2. year: **2017**
   3. countryCode: **AT**
   4. Click on Execute. The lsit of holidays is returned
5. Now let us call this public API from our Express APP and insert data into  the database

## Load database schema for Holiday API
   1. Navigate to the foler from terminal `$ cd /WORKSHOP/WebApp-Workshop1/holiday-app/`
   2. Initalize postgres `$ sudo docker-compose up -d postgres`
   3. Import database schema and create tables
      1. `$ sudo docker exec -i postgres-db psql -U node_user -d holiday_db  < schema/holiday.sql`
   4. You should see a message CREATE TABLE
   5. Open new terminal & login to the databse using password
      1. `$ sudo docker exec -it postgres-db psql -U admin_user -d holiday_db  -W`
   6. Check if all the tables are loaded
      1. `holiday_db=# \d`
      2.  You should see all the relations

## Bring up the Express node app
   1. Open another terminal from the same file location run the follwing command (Use this terminal to monitor the docker-compose logs)
   2. `$ sudo docker-compose up`
   3. Open another terminal and execute into the container
      1. `$ sudo docker exec -ti holiday-node-app /bin/sh`
      2. **`/home/node_app # npm run build`** To compile the type script
      3. **`/home/node_app # npm run start`** To run the node application
   4. You should see a message on the terminal
   5. ⚡️[server]: Server is running at http://localhost:3000
   6. Open `http://localhost:3000/` in your browser
   7. You should see **Express + TypeScript Server** message on the browser
