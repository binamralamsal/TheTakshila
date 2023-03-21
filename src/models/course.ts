import mongoose from "mongoose";

export interface ICourse {
  _id: string;
  featuredImage: string;
  title: string;
  duration: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced" | string;
  certificate: boolean;
  instructor: string;
  price: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const courseSchema = new mongoose.Schema<ICourse>(
  {
    featuredImage: { type: String, required: true },
    title: { type: String, required: true },
    duration: { type: String, required: true },
    skillLevel: { type: String, required: true },
    certificate: { type: Boolean, default: true },
    instructor: { type: String, required: true },
    price: { type: Number, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Course =
  mongoose.models.Course || mongoose.model<ICourse>("Course", courseSchema);
export default Course;
