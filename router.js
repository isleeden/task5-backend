const Router = require("express");
const Controller = require("./controllers");
const router = new Router();

router.get("/:id", Controller.getMessage);
router.get("/inbox/:recipient", Controller.getInboxMessages);
router.get("/sent/:author", Controller.getSentMessages);
router.post("/send", Controller.sendMessage);


module.exports = router;
