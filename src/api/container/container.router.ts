import { Router } from 'express';
import { createContainer, getContainerById, getContainers, updateContainer } from './container.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.post('/:transitId', createContainer);
    app.put('/transit/:transitId/:containerId', updateContainer);
    app.get('/:transitId', getContainers);
    app.get('/transit/:transitId/:containerId', getContainerById);
    return app;
};
