import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/postsController.js";

const router = Router();

router.route("/").get(getAllPosts);
router.route("/create").post(createPost);

export default router;
