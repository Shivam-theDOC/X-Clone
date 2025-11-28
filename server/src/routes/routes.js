import { Router } from "express";
import { register, login } from "../controllers/authControllers.js";

// initialize the router
const router = Router();

// router.route("/").get((req, res) => {
//   res.status(201).json({ message: "Loading" });
// });
router
  .route("/register")
  .post(register)
  .get((req, res) => {
    res.send("Hello from register");
  });

router
  .route("/login")
  .post(login)
  .get((req, res) => {
    res.send("Hello from login");
  });

export default router;
