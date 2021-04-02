const express=require('express')
const { 
    deleteProduct,
    updateProduct,
    getProducts,
    getProduct,
    createProduct,
} = require('../contollers/ProductController')

const router=express.Router()

router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',createProduct)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router