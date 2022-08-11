import express, { Express, Request, Response } from 'express';
import axios from 'axios';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('<h2>Express + TypeScript Server</h2>');
});

app.get('/country-list', async(req: Request, res: Response) => {
  try {
    const countryUrl : string = "https://date.nager.at/api/v3/AvailableCountries";
    const countryList: ObjectDTO = await axios.get(countryUrl);
    console.log(typeof(countryList))
    res.send(countryList.data);

  } catch (error: any) {
    console.log(error.toString());
    return { message: "Something Went Wrong!!" };
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


interface ObjectDTO {
  data: object[]
}