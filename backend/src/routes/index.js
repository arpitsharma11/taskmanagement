import express from "express";
import testRoutes from "./testRoute.js";

const routes = new express.Router();

routes.use(testRoutes);

export default routes;