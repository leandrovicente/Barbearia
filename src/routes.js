const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();

const UserController = require("./app/controllers/UserControllers");
const SessionControllers = require("./app/controllers/SessionControllers");
const DashboardControllers = require("./app/controllers/DashBoardControllers");
const FileController = require("./app/controllers/FileControllers");

const authMiddlewares = require("./app/middlewares/auth");
const guestMiddlewares = require("./app/middlewares/guest");

routes.use((req, res, next) => {
  res.locals.flashSucces = req.flash("success");
  res.locals.flashError = req.flash("error");
  return next();
});

routes.get("/files/:file", FileController.show);

routes.get("/", guestMiddlewares, SessionControllers.create);
routes.post("/signin", guestMiddlewares, SessionControllers.store);

routes.get("/signup", UserController.create);
routes.post("/signup", upload.single("avatar"), UserController.store);

routes.use("/app", authMiddlewares);

routes.get("/app/logout", SessionControllers.destroy);

routes.get("/app/dashboard", DashboardControllers.index);

module.exports = routes;
