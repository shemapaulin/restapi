import { Router } from "express";
import {userLogin, userRegistration} from "../Controllers/user.js";

const router = Router();

router.post("/user", userRegistration);
router.post("/userLogin", userLogin);

const userRouter = router;
export default userRouter;
