import { Request, Response } from 'express'
import { CategoryModel } from '../models/categoryModel'

export const getCategories = async (req: Request, res: Response) => {
  const categories = await CategoryModel.find()
  try {
    res.json(categories)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

export const createCategory = async (req: Request, res: Response) => {
  const category = new CategoryModel(req.body)

  try {
    await category.save()
    res.sendStatus(201).json(category)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

// Update

// Delete
