import { Router } from 'express';
import { createTransit, deleteTransit, getTransit, getTransitById, updateTransit } from './transit.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.post('/create', createTransit);
    app.get('/get', getTransit);
    app.get('/get/:id', getTransitById);
    app.put('/update/:id', updateTransit);
    app.delete('/delete/:id', deleteTransit);

    return app;
};
