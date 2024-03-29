import express from "express";
import { TaskController } from "./task.controller";

const router = express.Router();

router.post("/create", TaskController.insertIntoDb);
router.delete("/:id", TaskController.deleteData);
router.patch("/:id", TaskController.updatedData);
router.get("/:id", TaskController.getSingleData);
router.get("/", TaskController.getAllData);

export const TaskRoutes = router;
