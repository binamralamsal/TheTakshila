import { NextApiRequest, NextApiResponse } from "next";

import { getCurrentUserDetails } from "@/pages/api/auth/[...nextauth]";
import { connectDatabase } from "@/utils/db";
import Course from "@/models/course";
import { newCourseSchema } from "@/validators";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  await connectDatabase().catch(() =>
    res.json({ status: "ERROR", message: "Internal Server Error" })
  );

  try {
    if (req.method === "GET") {
      const course = await Course.findById(id);

      return res.json({ status: "OK", course });
    }

    const user = await getCurrentUserDetails({ req, res });

    if (!user || !user.isAdmin) {
      return res.status(401).json({ status: "ERROR", message: "Unauthorized" });
    }

    if (req.method === "DELETE") {
      await Course.deleteOne({ _id: id });

      return res.json({
        status: "OK",
        message: "Course deleted successfully!",
      });
    }

    if (req.method === "PATCH") {
      const parsed = newCourseSchema.safeParse(req.body);
      if (!parsed.success)
        return res.status(422).json({
          status: "ERROR",
          message: "Validation Error Occurred",
          error: parsed.error,
        });

      const { data } = parsed;

      await Course.updateOne({ _id: id }, data);
      return res.json({
        status: "OK",
        message: "Course updated successfully!",
      });
    }
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ status: "ERROR", error: error.message });
  }
}
