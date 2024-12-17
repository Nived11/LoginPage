import { Router } from "express";
import * as rh from "./RequestHandler/user.requesthandler.js"
const router=Router();

router.route("/adduser").post(rh.addUser);

export default router;