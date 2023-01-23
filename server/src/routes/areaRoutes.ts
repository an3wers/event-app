import { Router, Request, Response } from 'express'
import { createArea, deleteArea, getAreas, updateArea } from '../controllers/areaController'

const router = Router()

// Get all area
router.get('/', getAreas)

// Create area
router.post('/', createArea)

// Update area
router.patch('/:id', updateArea)

// Delete area
router.delete('/:id', deleteArea)

export default router
