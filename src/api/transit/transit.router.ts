import { Router } from 'express';
import { createTransit, deleteTransit, getTransit, getTransitById, updateTransit } from './transit.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.post('/', createTransit);
    app.get('/', getTransit);
    app.get('/:id', getTransitById);
    app.put('/:id', updateTransit);
    app.delete('/:id', deleteTransit);

    return app;
};
