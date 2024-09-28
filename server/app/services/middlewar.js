const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    const id = uuidv4();
    const pictureName = `${id}${path.extname(file.originalname)}`;
    req.body.image = pictureName;
    cb(null, pictureName);
  },
});

const uploadPicture = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
};

module.exports = uploadPicture;
