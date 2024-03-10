import { Router } from 'express';
import authRouter from './auth/auth.router';
import transitRouter from './transit/transit.router';
import authenticateToken from '../shared/authenticate';
import statusRouter from './status/status.router';
import containerRouter from './container/container.router';
import userRouter from './user/user.router';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use('/auth', authRouter());
  app.use('/user', authenticateToken(), userRouter());
  app.use('/transit', authenticateToken(), transitRouter());
  app.use('/status', authenticateToken(), statusRouter());
  app.use('/container', authenticateToken(), containerRouter());
  return app;
};
