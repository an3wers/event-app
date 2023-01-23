import mongoose from 'mongoose'

const BrandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requred: true
    },
    categories: {
      type: [String]
    }
  },
  { timestamps: true }
)

export const BrandModel = mongoose.model('Brands', BrandSchema)
