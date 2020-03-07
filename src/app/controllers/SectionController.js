import Section from "../models/Section";
import Page from "../models/Page";

class SectionController {
  async index(req, res) {
    const { page_id } = req.params;

    const page = await Page.findByPk(page_id, {
      include: {
        association: "sections",
      },
    });

    return res.json(page);
  }

  async store(req, res) {
    const { page_id } = req.params;
    const { content } = req.body;
    const page = await Page.findByPk(page_id);

    if (!page) {
      return res.status(400).json({
        error: "page not found",
      });
    }

    const section = await Section.create({
      content,
      page_id,
    });

    return res.json(section);
  }

  async update(req, res) {
    const { page_id, id } = req.params;
    const page = await Page.findByPk(page_id);
    const section = await Section.findByPk(id);

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
    const page = await Page.findByPk(page_id);
    const section = await Section.findByPk(id);

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

export default new SectionController();
