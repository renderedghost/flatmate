import express from 'express';
import bodyParser from 'body-parser';
import assistantRoutes from './routes/assistant.ts';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const port = process.env.VITE_BACKEND_PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use('/api', assistantRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Catch-all for unhandled errors
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});