import { Router } from "express";
import * as rh from "./RequestHandler/user.requesthandler.js"
import Auth from "./middleware/Auth.js";
const router=Router();

router.route("/adduser").post(rh.addUser);
router.route("/login").post(rh.loginUser);
router.route("/home").get(Auth,rh.Home);


export default router;