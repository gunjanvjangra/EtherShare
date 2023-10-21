import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

const app = express();

dotenv.config({ path: "./config/config.env"});

app.use(cors({origin:"*"}));

export default app;