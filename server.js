import  express  from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from './DataImport.js';



dotenv.config();
connectDatabase();
const app = express();

// API 
app.use("/api/import", ImportData)







app.get('/', (req, res)=>{
    res.send("API is Runnig...");
});

const PORT = process.env.PORT;

app.listen(PORT,console.log(`server runnig in port ${PORT}...`));