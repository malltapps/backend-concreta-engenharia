"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Section = require('../models/Section'); var _Section2 = _interopRequireDefault(_Section);
var _Page = require('../models/Page'); var _Page2 = _interopRequireDefault(_Page);

class SectionController {
  async index(req, res) {
    const { page_id } = req.params;

    const page = await _Page2.default.findByPk(page_id, {
      include: {
        association: "sections",
      },
    });

    return res.json(page);
  }

  async store(req, res) {
    const { page_id } = req.params;
    const { content } = req.body;
    const page = await _Page2.default.findByPk(page_id);

    if (!page) {
      return res.status(400).json({
        error: "page not found",
      });
    }

    const section = await _Section2.default.create({
      content,
      page_id,
    });

    return res.json(section);
  }

  async update(req, res) {
    const { page_id, id } = req.params;
    const page = await _Page2.default.findByPk(page_id);
    const section = await _Section2.default.findByPk(id);

    if (!page) {
      return res.status(400).json({
        error: "page not found",
      });
    }

    if (!section) {
      return res.status(400).json({
        error: "section not found",
      });
    }

    const newData = await section.update(req.body);
    const { content } = newData;

    return res.json({
      content,
    });
  }

  async destroy(req, res) {
    const { page_id, id } = req.params;
    const page = await _Page2.default.findByPk(page_id);
    const section = await _Section2.default.findByPk(id);

    if (!page) {
      return res.status(400).json({
        error: "page not found",
      });
    }

    if (!section) {
      return res.status(400).json({
        error: "section not found",
      });
    }

    await section.destroy();

    return res.json(section);
  }
}

exports. default = new SectionController();
