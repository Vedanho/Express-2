const { Router } = require('express')
const { brandsController } = require('../controllers/brands.controller')
const router = Router();
router.get ('/brands',brandsController.getBrand)
router.post ('/brands',brandsController.postBrand)
router.delete ('/brands/:id',brandsController.deleteBrand)

module.exports = router