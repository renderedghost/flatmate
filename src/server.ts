import express from 'express';
import bodyParser from 'body-parser';
import assistantRoutes from './routes/assistant';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', assistantRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});