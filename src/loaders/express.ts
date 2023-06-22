import routes from '@/api';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

const expressLoader = ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   */
  app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  app.use(express.json());
  app.use('/', routes());
};

export default expressLoader;
