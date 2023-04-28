import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.use('/api/v1/dalle', dalleRoutes);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server is running on port ${process.env.SERVER_PORT}`)
);
