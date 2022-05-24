const { Router } = require('express')
const { productsController } = require('../controllers/products.controller')
const router = Router();
router.get('/products', productsController.getProduct)
router.get ('/products/:id', productsController.getProductById)
router.post ('/products', productsController.postProduct)
router.delete ('/products/:id', productsController.deleteProductById)

module.exports = router