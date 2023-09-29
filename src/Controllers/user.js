import User from "../Models/index.js";

import userSchema from "../Utils/validations/userSchema.js";
import { encode,getPurePassword } from "../Utils/functions/encodePassword.js";
import reportJoiError from "../Utils/functions/reportError.js";
import userAuth from "../middlewares/userAuth.js";
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
const userLogin = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    const inputValidation = userSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    const user = await User.findOne({ where: { email: email } });

    if (!user) return res.status(401).send(`Incorrect username or password(user)`);
    const decodedPassword = await getPurePassword(password, user.password);
console.log(decodedPassword);
    if (password != decodedPassword)
      return res.status(401).send(`Incorrect username or password++`);
      
    let userInfo = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
return userAuth(userInfo,res)


  } catch (error) {
    console.log(error);
    res.send(`500 Server Error : `, error);
  }
};

export { userRegistration,userLogin};
