import express from "express";
import {
  PasswordResetController,
  delete_user,
  get_user,
  update_user,
} from "../Controllers/UserController.js";

const router = express();

// GET a single user by ID
router.get("/users/:id", get_user);

// PUT/update a user by ID
router.put("/users/:id", update_user);

// DELETE a user by ID
router.delete("/users/:id", delete_user);

// Password Update
router.put("/restpassword/:id", PasswordResetController);

export default router;
