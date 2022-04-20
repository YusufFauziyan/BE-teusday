const express = require("express");

const router = express.Router();

// Controller
const {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");
// Get addUser controller user here ...
const { addUsers, getUsers } = require("../controllers/user");

// Route
router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.post("/todo", addTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

// Create Route for add user here ...
router.get("/users", getUsers);
router.post("/user", addUsers);



module.exports = router;
