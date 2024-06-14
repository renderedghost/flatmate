import express from 'express';
import bodyParser from 'body-parser';
import assistantRoutes from './routes/assistant';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const port = process.env.EXPRESS_SERVER__PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use('/api', assistantRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});