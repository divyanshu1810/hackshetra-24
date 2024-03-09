import { Router } from 'express';
import authRouter from './auth/auth.router';
import transitRouter from './transit/transit.router';
import authenticateToken from '../shared/authenticate';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use('/auth', authRouter());
  app.use('/transit', authenticateToken(), transitRouter());
  return app;
};
