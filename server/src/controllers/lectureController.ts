import { Request, Response } from 'express'
import { LectureModel } from '../models/lectureModel'

export const getLectures = async (req: Request, res: Response) => {
  const lectures = await LectureModel.find()
  try {
    res.json(lectures)
  } catch (error) {
    res.status(500).send(error)
  }
}

export const createLecture = async (req: Request, res: Response) => {
  const lecture = new LectureModel(req.body)
  try {
    await lecture.save()
    res.sendStatus(201).json(lecture)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

// Update

// Delete