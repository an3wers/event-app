import { Request, Response } from 'express'
import { BrandModel } from '../models/brandModel'

export const getBrands = async (req: Request, res: Response) => {
  const brands = await BrandModel.find()
  try {
    res.json(brands)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

export const createBrand = async (req: Request, res: Response) => {
  const brand = new BrandModel(req.body)
  try {
    await brand.save()
    res.sendStatus(201).json(brand)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
}

// Update

// Delete
