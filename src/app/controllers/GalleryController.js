import Gallery from "../models/Gallery";

class GalleryController {
  async store(req, res) {
    const { originalname, filename } = req.file;
    const gallery = await Gallery.create({
      dir: filename,
    });
    return res.json(gallery);
  }
}

export default new GalleryController();
