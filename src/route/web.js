import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import clinicController from "../controllers/clinicController.js";
//const { specs, swaggerUi } = require('../config/swaggerConfig.js');

let router = express.Router();

//router.use('/api', swaggerUi.serve, swaggerUi.setup(specs));

let initWebRoutes = (app) => {

    router.get("/hello", (req, res) => {
        return res.send("Hello my man")
    });

    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD);

    router.post("/post-crud", homeController.postCRUD);
    router.get("/get-crud", homeController.displayGetCRUD);
    router.get("/edit-crud", homeController.getEditCRUD);

    router.post("/put-crud", homeController.putCRUD);
    router.get("/delete-crud", homeController.deleteCRUD);

    //API USER MANAGE
    router.post("/api/login", userController.handleLogin);
    router.get("/api/get-all-users", userController.handleGetAllUsers);
    router.post("/api/create-new-user", userController.handleCreateNewUser);
    router.put("/api/edit-user", userController.handleEditUser);
    router.delete("/api/delete-user", userController.handleDeleteUser);
    //API CLINIC MANAGE
    router.get("/api/get-all-clinics", clinicController.getAllClinic);
    router.get("/api/get-clinics-by-id", clinicController.getClinicByID);
    router.post("/api/create-new-clinic", clinicController.createClinic);
    router.put("/api/edit-clinic", clinicController.editClinic);
    router.delete("/api/delete-clinic", clinicController.deleteClinic);

    return app.use("/", router);

}

module.exports = initWebRoutes;