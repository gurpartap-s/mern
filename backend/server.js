import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

// create an instance of the express server
const app = express();
const PORT = process.env.PORT || 5000;

//middleware that allows us to accept JSON data in the request body
app.use(express.json())

app.use("/api/products",productRoutes);

// server for requests to the server and execute the callback tha follows
app.listen(PORT, () =>{
    connectDB();
    console.log("Server started at http://localhost:",PORT);
})