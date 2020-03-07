import Gallery from "../models/Gallery";

class GalleryController {
  async store(req, res, next) {
    const fileArray = [];
    for (let i = 0; i < req.files.length; i++) {
      const element = req.files[i];

      fileArray.push({
        originalName: element.originalname,
        generatedName: element.filename,
        dir: req.body.dir,
      });
    }
    // const response = await Gallery.bulkCreate(fileArray);

    return res.json(fileArray);
  }
}

export default new GalleryController();
