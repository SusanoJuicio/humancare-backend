// routes/productRoutes.js
import { Router } from 'express';
import { purchaseProduct, getAllProducts, getFeaturedProducts } from '../controllers/productControllers.js';

const router = Router();
router.get("/", getAllProducts)
router.get("/featured", getFeaturedProducts)
router.post('/purchase', purchaseProduct);

export default router;