import { Router } from 'express'
import {
  getCategories,
  createCategory
} from '../controllers/categoryController'
const router = Router()

// Get all categories
router.get('/', getCategories)

// Create category
router.post('/', createCategory)
export default router
