import { Request } from "express"
import * as multer from "multer"
import * as fs from "fs"
import * as path from "path"
const folderName = 'assets'
const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void
  ) {
    if (!fs.existsSync(`public/${folderName}`))
      fs.mkdirSync(`public/${folderName}`)
    cb(null, `public/${folderName}`)
  },
  filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    let folderName = 'assets'
    let fileName = `${folderName}_${Date.now()}${path.extname(
      file.originalname
    )}`;
    req.body[file.fieldname] = `/${folderName}/${fileName}`;
    cb(null, fileName)
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      console.log('successfull')
      cb(null, true)
    } else {
      console.log("failed")
      cb(null, false)
    }
  }
})
export const MulterUpload = upload




