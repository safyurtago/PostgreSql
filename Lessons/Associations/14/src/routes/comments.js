const {Router} = require("express");
const {find, create} = require("../controllers/comments.controller");

const router = Router();

router.get("/comments", find);
router.post("/comments", create);

module.exports = router;
