import mongoose from 'mongoose'

const LectureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    date: {
      type: Date
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    },
    areaId: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

export const LectureModel = mongoose.model('Lectures', LectureSchema)
