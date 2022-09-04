import  express  from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from './DataImport.js';
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middlewere/Errors.js";



dotenv.config();
connectDatabase();
const app = express();

// API 
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)


//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);




const PORT = process.env.PORT;

app.listen(PORT,console.log(`server runnig in port ${PORT}...`));