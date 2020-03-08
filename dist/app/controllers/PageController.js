"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _slugify = require('slugify'); var _slugify2 = _interopRequireDefault(_slugify);
var _Page = require('../models/Page'); var _Page2 = _interopRequireDefault(_Page);

class PageController {
  async index(req, res) {
    const pages = await _Page2.default.findAll();
    return res.json(pages);
  }

  async store(req, res) {
    const { name, link } = req.body;
    const slug = _slugify2.default.call(void 0, name).toLowerCase();
    const page = await _Page2.default.create({
      name,
      link,
      slug,
    });

    return res.json(page);
  }
}

exports. default = new PageController();
