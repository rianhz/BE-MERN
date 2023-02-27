import express from 'express';
import { addMahasiswa, deleteMahasiswa, editMahasiswa, getAllMahasiswa, getMahasiswaById, getMahasiswaByName } from '../controller/mahasiswaController.js';

const mahasiswaRoute = express.Router();

mahasiswaRoute.get('/', getAllMahasiswa);
mahasiswaRoute.post('/add', addMahasiswa);
mahasiswaRoute.get('/searchId/:id', getMahasiswaById);
mahasiswaRoute.get('/searchName/:nama', getMahasiswaByName);
mahasiswaRoute.patch('/edit/:id', editMahasiswa);
mahasiswaRoute.delete('/delete/:id', deleteMahasiswa);

export default mahasiswaRoute;
