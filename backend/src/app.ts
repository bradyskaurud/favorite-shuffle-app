import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as authRouter } from './routes/auth';
import { router as artistRouter } from './routes/artist';
import { router as playlistRouter } from './routes/playlist';
import morgan from 'morgan';

dotenv.config();

const app = express();
app.use(morgan('combined'));
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/playlist', playlistRouter);
app.use('/artist', artistRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
