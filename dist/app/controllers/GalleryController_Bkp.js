"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Gallery = require('../models/Gallery'); var _Gallery2 = _interopRequireDefault(_Gallery);

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

exports. default = new GalleryController();
