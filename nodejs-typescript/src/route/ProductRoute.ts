
import express from 'express';

const productController = require('../controller/ProductController');

const router = express.Router();

router.get('', productController.getAllProducts);

export default router;