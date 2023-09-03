const {Router} = require("express");
const {find, create} = require("../controllers/views.controller");

const router = Router();

router.get("/views", find);
router.post("/views", create);

module.exports = router;
