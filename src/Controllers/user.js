import User from "../Models/index.js";

import userSchema from "../Utils/validations/userSchema.js";
import { encode } from "../Utils/functions/encodePassword.js";
import reportJoiError from "../Utils/functions/reportError.js";

const userRegistration = async (req, res) => {
  try {
    const inputValidation = userSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    req.body.password = await encode(req.body.password);
    const user = await User.create(req.body);
    if (user) {
      res.status(200).json({
        result: req.body,
        message: "inserting data successful",
      });
    } else {
      res.status(404).json({
        message: "inserting data failed",
      });
    }
  } catch (error) {
    console.log("internal server error", error);
  }
};

export default userRegistration;
