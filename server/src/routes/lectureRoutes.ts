import { Router } from 'express'
import { getLectures, createLecture } from '../controllers/lectureController'
const router = Router()

router.get('/', getLectures)

router.post('/', createLecture)

export default router
