const {Router} = require("express");
const {
  find,
  create,
  findOne,
  update,
  remove,
} = require("../controllers/task-manager.controller");

const router = Router();

router.get("/", find);
router.get("/:id", findOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;