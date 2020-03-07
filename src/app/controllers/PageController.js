import slugify from "slugify";
import Page from "../models/Page";

class PageController {
  async index(req, res) {
    const pages = await Page.findAll();
    return res.json(pages);
  }

  async store(req, res) {
    const { name, link } = req.body;
    const slug = slugify(name).toLowerCase();
    const page = await Page.create({
      name,
      link,
      slug,
    });

    return res.json(page);
  }
}

export default new PageController();
