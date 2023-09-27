import { Router } from "express";
import userRegistration from "../Controllers/user.js";

const router = Router();

router.post("/user", userRegistration);

const userRouter = router;
export default userRouter;
