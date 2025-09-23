import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, eliminarCategoria} from '../controllers/categorias.controller.js';

const router = Router();

router.get('/categorias', obtenerCategorias);
// Rutas
router.get('/categoria/:id_categoria', obtenerCategoria);

//Rutas para eliminar
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);


export default router; 