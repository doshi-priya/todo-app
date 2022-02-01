import express, { Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/users"
import cors from "cors";


const app: Application = express();

const PORT: string | number = process.env.PORT || 4000;

const uri: string = "mongodb+srv://priya:priya@cluster0.dcikl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri as string)
.then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
})


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({ message: "API Working" });
  });

  app.use(userRoutes);
  

app.listen(3000, () => {
    console.log('server is listening on port');
    
})
