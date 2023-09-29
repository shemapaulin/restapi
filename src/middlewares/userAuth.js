import  jwt from "jsonwebtoken";
const userAuth=(userInfo,res)=>{
jwt.sign(
    { userInfo },
    process.env.SECRET_KEY,
    { expiresIn: "20m" },
    (err, token) => {
      if (err) return console.error(err);
      res.status(200).json({
        message: "Logged in successfully",
        token: token,
      });
    }
  )
};

export default userAuth;