
const multer=require("multer")

// Multer Configurations
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../uploads');
    },
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, '-')}`;
      cb(null, fileName);
    },
  });
  
  const upload = multer({ storage }).single('file');



  module.exports=upload