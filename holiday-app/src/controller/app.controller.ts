import {Router} from "express";
import { appService } from "../service/app.service";

export const router = Router();

router.post("/test1", function(req, res){
    const response = appService.test();
    return res.status(response.status).json(response.data);
})

router.get("/country-list", async(req, res)=>{
    const response = await appService.getCountryList();
    return res.status(response.status).json(response.data);
}) 