import { NextFunction, Request, Response, Router } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: 'hello world' });
  });
};
