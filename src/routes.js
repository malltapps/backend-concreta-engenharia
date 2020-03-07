import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import UserController from "./app/controllers/UserController";
import PageController from "./app/controllers/PageController";
import GalleryController from "./app/controllers/GalleryController";
import SectionController from "./app/controllers/SectionController";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

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

/* routes.get("/", async (req, res) => {
  return res.json({
    name: "Mallt CMS - Version 1.0",
  });
}); */

routes.post("/gallery", upload.single("file"), GalleryController.store);
routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);
routes.get("/sections", SectionController.index);
routes.get("/pages", PageController.index);
routes.get("/pages/:page_id/sections", SectionController.index);
routes.use(authMiddleware);
routes.post("/pages", PageController.store);
routes.post("/pages/:page_id/sections", SectionController.store);
routes.put("/pages/:page_id/sections/:id", SectionController.update);
routes.delete("/pages/:page_id/sections/:id", SectionController.destroy);

export default routes;
