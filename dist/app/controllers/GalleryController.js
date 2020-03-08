"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Gallery = require('../models/Gallery'); var _Gallery2 = _interopRequireDefault(_Gallery);

class GalleryController {
  async store(req, res) {
    const { originalname, filename } = req.file;
    const gallery = await _Gallery2.default.create({
      dir: filename,
    });
    return res.json(gallery);
  }
}

exports. default = new GalleryController();
