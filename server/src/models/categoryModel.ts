import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requred: true
    }
  },
  { timestamps: true }
)

export const CategoryModel = mongoose.model('Categories', CategorySchema)
