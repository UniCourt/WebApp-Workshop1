import {Pool} from "pg";

class DB{
    private pool : Pool;
    constructor(){
        this.dbConfig();
    }

    //
  public dbConfig() {
    this.pool = new Pool({
      host: process.env["POSTGRES_HOST"],
      port: parseInt(<string>process.env["POSTGRES_PORT"]),
      user: process.env["POSTGRES_USER"],
      password: process.env["POSTGRES_PASSWORD"],
      database: process.env["POSTGRES_DB"]
    });
  }
}

export const db = new DB();

