import { Router } from 'express';
import { logIn, signUp } from './auth.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.post('/signup', signUp)
    app.post('/login', logIn)

    return app;
};
