import express, { Express, Request, Response } from "express";
import axios from "axios";
import { Pool } from "pg";
class Server {
  
  private app: express.Application;
  private query: Pool;

  constructor() {
    this.app = express();
    this.portConfig();
    this.routes();
  }

  //Port configuration 
  public portConfig() {
    this.app.set("port", 3000);
  }

  //DB configuration
  public dbCOnfig() {
    this.query = new Pool({
      host: process.env["POSTGRES_HOST"],
      port: parseInt(<string>process.env["POSTGRES_PORT"]),
      user: process.env["POSTGRES_USER"],
      password: process.env["POSTGRES_PASSWORD"],
      database: process.env["POSTGRES_DB"]

    });
  }

  public routes() {

    this.app.get('/', async (req: Request, res: Response)=> {

      const sqlQuery: string = "SELECT NOW()";
      //const result: [] = await this.query(sqlQuery);

      res.send('<h2>Express + TypeScript Server</h2>');
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
