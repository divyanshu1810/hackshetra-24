import { Router } from 'express';
import { getStatus, updateStatus } from './status.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.get('/:transitId', getStatus);
    app.put('/:transitId', updateStatus);
    return app;
};
