import express, { Request, Response, Application, NextFunction } from 'express';
import { router } from './routers/routers';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';
import path from 'path';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 1999;

app.use(cors());
app.use(express.json());
app.use(router);

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); // Rota para acessar a pasta de imagens tmp

// Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({
      error: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Erro interno do servidor",
    });
  }
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
