import { NextApiRequest, NextApiResponse } from "next";

import { getCurrentUserDetails } from "@/pages/api/auth/[...nextauth]";
import { connectDatabase } from "@/utils/db";
import Course from "@/models/course";
import { newCourseSchema } from "@/validators";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDatabase().catch(() =>
    res.json({ status: "ERROR", message: "Internal Server Error" })
  );

  try {
    /*
          @GET /api/clubs/:id
          @desc Get a club details
        */
    if (req.method === "GET") {
      const courses = await Course.find();

      return res.json({ status: "OK", courses });
    }

    const user = await getCurrentUserDetails({ req, res });

    if (!user || !user.isAdmin) {
      return res.status(401).json({ status: "ERROR", message: "Unauthorized" });
    }

    if (req.method === "POST") {
      const parsed = newCourseSchema.safeParse(req.body);
      if (!parsed.success)
        return res.status(422).json({
          status: "ERROR",
          message: "Validation Error Occurred",
          error: parsed.error,
        });

      const { data } = parsed;

      await Course.create(data);

      return res.json({ status: "OK", message: "Course created successfully" });
    }
  } catch (error) {
    return res.status(400).json({ status: "ERROR", error });
  }
}
