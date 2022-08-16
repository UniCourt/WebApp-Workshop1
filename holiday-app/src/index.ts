import express, { Express, Request, Response } from "express";
import axios from "axios";
import { Pool } from 'pg';
class Server {
  
  private app: express.Application;
  private pool: Pool;

  constructor() {
    this.app = express();
    this.portConfig();
    this.dbConfig();
    this.routes();
  }

  //Port configuration 
  public portConfig() {
    this.app.set("port", 3000);
  }

  //DB configuration
  public dbConfig() {
    this.pool = new Pool({
      host: process.env["POSTGRES_HOST"],
      port: parseInt(<string>process.env["POSTGRES_PORT"]),
      user: process.env["POSTGRES_USER"],
      password: process.env["POSTGRES_PASSWORD"],
      database: process.env["POSTGRES_DB"]
    });
  }

  public async query(query: string) {
    return await this.pool.query(query);
  }

  public routes() {

    this.app.get('/', async (req: Request, res: Response)=> {

      const sqlQuery: string = "SELECT NOW()";
      const result = await this.query(sqlQuery)

      res.json({
        message: 'Express + TypeScript Server',
        dbResult: result.rows
      });
    });

    this.app.get("/country-list", async (req: Request, res: Response) => {
      try {
        const countryUrl: string =
          "https://date.nager.at/api/v3/AvailableCountries";
        const countryList: ObjectDTO = await axios.get(countryUrl);
        console.log(`Type of response: ${typeof countryList}`);
        res.send(countryList.data);
      } catch (error: any) {
        console.log(error.toString());
        return { message: "Something Went Wrong!!" };
      }
    });
  }

  public start() {
    this.app.listen(this.app.get('port'), function() {
      console.log(`⚡️[server]: Server is running at http://localhost:3000`);
    })
  }
}
const server = new Server();
server.start();


interface ObjectDTO {
  data: object[];
}
