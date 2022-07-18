-- Master Table
CREATE TABLE IF NOT EXISTS country (
    id SERIAL,
    country_code varchar(2),
    holiday_year INT,
    holiday_count INT,
    CONSTRAINT country_primary_key PRIMARY KEY(id),
    CONSTRAINT uq_year_code_together UNIQUE (country_code, holiday_year)
);

-- Foreign table to hold the list of holiday details
CREATE TABLE IF NOT EXISTS holiday (
    id SERIAL,
    country_id INT,
    holiday_date DATE,
    local_name VARCHAR(128),
    holiday_name VARCHAR(128),
    launch_year INT,
    CONSTRAINT p_holiday_primary_key PRIMARY KEY(id),
    CONSTRAINT fk_holiday_country_id FOREIGN KEY (country_id)
        REFERENCES country (id)
);