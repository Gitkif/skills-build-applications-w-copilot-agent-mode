import { Router } from 'express';
import ExampleController from '../controllers/exampleController';

const router = Router();
const exampleController = new ExampleController();

export const setRoutes = (app) => {
    app.use('/api/example', router);
    router.get('/', exampleController.getAllExamples.bind(exampleController));
    router.get('/:id', exampleController.getExampleById.bind(exampleController));
    router.post('/', exampleController.createExample.bind(exampleController));
    router.put('/:id', exampleController.updateExample.bind(exampleController));
    router.delete('/:id', exampleController.deleteExample.bind(exampleController));
};