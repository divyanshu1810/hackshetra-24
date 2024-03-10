import { Router } from 'express';
import { signUp } from './user.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.post('/create-user', signUp);
    return app;
};
