import express from "express";
import { connection } from "./database/dbConnection.js";
const app = express();
const port = 5000;

connection();
app.listen(port, () => console.log(`Server running at ${port}`));