const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");
const guestMiddleware = require("./app/middlewares/guest");

const UserController = require("./app/controllers/UserControllers");
const SessionController = require("./app/controllers/SessionControllers");
const DashboardController = require("./app/controllers/DashboardControllers");
const FileController = require("./app/controllers/FileControllers");
const AppointmentController = require("./app/controllers/AppointmentControllers");
const AvailableController = require("./app/controllers/AvailableControllers");
const ScheduleController = require("./app/controllers/ScheduleControllers");

routes.use((req, res, next) => {
  res.locals.flashSucces = req.flash("success");
  res.locals.flashError = req.flash("error");

  return next();
});

routes.get("/files/:file", FileController.show);

routes.get("/", guestMiddleware, SessionController.create);
routes.post("/signin", SessionController.store);

routes.get("/signup", guestMiddleware, UserController.create);
routes.post("/signup", upload.single("avatar"), UserController.store);

routes.use("/app", authMiddleware);

routes.get("/app/logout", SessionController.destroy);

routes.get("/app/dashboard", DashboardController.index);

routes.get("/app/appointments/new/:provider", AppointmentController.create);
routes.post("/app/appointments/new/:provider", AppointmentController.store);
routes.get("/app/available/:provider", AvailableController.index);

routes.get("/app/schedule", ScheduleController.index);

module.exports = routes;
