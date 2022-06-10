CREATE TABLE IF NOT EXISTS movie (
   id serial,
   original_title varchar(500) NOT NULL UNIQUE,
   original_language varchar(5) NOT NULL,
   popularity numeric(10,5) NOT NULL,
   release_date date NOT NULL,
   production_company_id integer [],
   revenue integer NOT NULL,
   status varchar(250) NOT NULL,
   tagline varchar(1000) NOT NULL,
   title text not null,
   vote_average numeric(10,5) NOT NULL,
   vote_count integer,
   genres JSON,
   PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS production_company (
  id serial,
  name varchar(500) NOT NULL UNIQUE,
  origin_country varchar(50)
);


CREATE TABLE IF NOT EXISTS casting (
  id serial,
  name varchar(500) NOT NULL,
  gender smallint NOT NULL,
  movie_id integer NOT NULL,
  popularity numeric(10,5) NOT NULL,
  character varchar(500),
  FOREIGN KEY (movie_id) REFERENCES movie (id),
  PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS recommendation (
  id serial,
  movie_id integer NOT NULL,  -- add t0 movie table first 
  media_type varchar(100) NOT NULL,
  title varchar(500) NOT NULL,
  popularity numeric(10,5) NOT NULL,
  release_date date,
  vote_average numeric(10,5) ,
  vote_count integer,
  FOREIGN KEY (movie_id) REFERENCES movie (id),
  PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS review (
  id serial,
  movie_id integer,
  user_name varchar(500) NOT NULL,
  content text,
  FOREIGN KEY (movie_id) REFERENCES movie (id),
  PRIMARY KEY(id)
);
