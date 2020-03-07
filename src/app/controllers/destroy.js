//teste inicial
const { page_id, id } = req.params;
return res.json({
  page: page_id,
  id,
});

/////

const { page_id, id } = req.params;
// const {
//   id
// } = req.body;
const page = await Page.findByPk(page_id);
if (!page) {
  return res.status(400).json({
    error: "page not found ",
  });
}

const section = await Section.findByPk(id);

// await user.removeTech(tech)
return res.json(section);
