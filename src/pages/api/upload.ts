import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(404).json({
      error: "Page not found",
    });

  const form = new formidable.IncomingForm({
    keepExtensions: true,
    uploadDir: "./public/uploads",
    multiples: false,
    maxFields: 1,
    allowEmptyFiles: false,
    maxFileSize: 10_485_760, // 10 MB
    filename: (name, ext, part, form) => {
      const randomId = crypto.randomBytes(5).toString("hex");
      return `${name}-${randomId}${ext}`;
    },
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      if (err.code === 1009) {
        return res.json({
          error: "Max file size exceeded",
          status: "ERROR",
        });
      }
      return res.status(400).json({
        error: "Internal Error Occurred",
        message: err,
        status: "ERROR",
      });
    }

    if (!files.file || Array.isArray(files.file))
      return res.status(400).json({
        error: "File key not found",
        status: "ERROR",
      });

    const splitFilePaths = files.file.filepath.split("\\");
    const publicIndex = splitFilePaths.findIndex((val) => val === "public");
    const path = `/${splitFilePaths.slice(publicIndex + 1).join("/")}`;

    return res.json({
      size: files.file.size,
      url: path,
      fileName: files.file.newFilename,
      fileType: files.file.mimetype,
      originalFilename: files.file.originalFilename,
    });
  });
};

export interface UploadImageResponse {
  size: number;
  url: string;
  fileName: string;
  fileType: string;
  originalFilename: string;
}

export default handler;

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
