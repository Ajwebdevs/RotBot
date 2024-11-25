import  express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/brainrot.js';
import dotenv from 'dotenv';
dotenv.config();
const app  = express();

app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/api/brainrot", router);

//port
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});