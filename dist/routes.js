"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _PageController = require('./app/controllers/PageController'); var _PageController2 = _interopRequireDefault(_PageController);
var _GalleryController = require('./app/controllers/GalleryController'); var _GalleryController2 = _interopRequireDefault(_GalleryController);
var _SectionController = require('./app/controllers/SectionController'); var _SectionController2 = _interopRequireDefault(_SectionController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();
const upload = _multer2.default.call(void 0, _multer4.default);

/*routes.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});*/

/* routes.post("/api/photo", (req, res) => {
  upload(req, res, err => {
    // console.log(req.body);
    // console.log(req.files);
    if (err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
  });
}); */

routes.get("/", async (req, res) => {
  return res.json({
    name: "Mallt CMS - Version 1.0",
  });
});

routes.post("/gallery", upload.single("file"), _GalleryController2.default.store);
routes.post("/sessions", _SessionController2.default.store);
routes.post("/users", _UserController2.default.store);
routes.get("/sections", _SectionController2.default.index);
routes.get("/pages", _PageController2.default.index);
routes.get("/pages/:page_id/sections", _SectionController2.default.index);
routes.use(_auth2.default);
routes.post("/pages", _PageController2.default.store);
routes.post("/pages/:page_id/sections", _SectionController2.default.store);
routes.put("/pages/:page_id/sections/:id", _SectionController2.default.update);
routes.delete("/pages/:page_id/sections/:id", _SectionController2.default.destroy);

exports. default = routes;
