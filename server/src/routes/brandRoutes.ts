import { Router } from 'express'
import { getBrands, createBrand } from '../controllers/brandController'

const router = Router()

// Get all brands
router.get('/', getBrands)

// Create brand
router.post('/', createBrand)

export default router
