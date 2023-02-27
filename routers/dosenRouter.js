import express from 'express';
import { addDosen, deleteDosen, editDosen, getAllDosen, getDosenById, getDosenByName } from '../controller/dosenController.js';

const dosenRoute = express.Router();

dosenRoute.get('/', getAllDosen);
dosenRoute.post('/add', addDosen);
dosenRoute.get('/search/:id', getDosenById);
dosenRoute.get('/searchName/:nama', getDosenByName);
dosenRoute.patch('/edit/:id', editDosen);
dosenRoute.delete('/delete/:id', deleteDosen);

export default dosenRoute;
