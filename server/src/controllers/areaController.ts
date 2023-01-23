import { Request, Response } from 'express'
import { AreaModel } from '../models/areaModel'

// Get all areas
export const getAreas = async (req: Request, res: Response) => {
  const areas = await AreaModel.find()
  try {
    res.json(areas)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

// Create new area
export const createArea = async (req: Request, res: Response) => {
  const area = new AreaModel(req.body)

  try {
    await area.save()
    res.sendStatus(201).json(area)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

// Update area
export const updateArea = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AreaModel.findByIdAndUpdate(id, req.body, { new: true })
  try {
    res.sendStatus(200).json(result)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

// Delete area
export const deleteArea = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AreaModel.findByIdAndDelete(id)
  try {
    res.sendStatus(200).json(result)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}
