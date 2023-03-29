import express from "express";
import {
  delete_user,
  get_user,
  update_user,
} from "../Controllers/UserCOntroller.js";

const router = express();

// GET a single user by ID
router.get("/users/:id", get_user);

// PUT/update a user by ID
router.put("/users/:id", update_user);

// DELETE a user by ID
router.delete("/users/:id", delete_user);

export default router;
