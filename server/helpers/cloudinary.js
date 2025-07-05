const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "dtilpfqrs",
  api_key: process.env.CLOUDINARY_KEY ||"792564737498591" ,
  api_secret: process.env.CLOUDINARY_SECRET || "wwu9b5llcfzaxrkzAoI66AtKX6o",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "image",
    format:"jpg"
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
