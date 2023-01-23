import mongoose from 'mongoose'

const AreaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requred: true
    }
  },
  { timestamps: true }
)

export const AreaModel = mongoose.model('Areas', AreaSchema)
