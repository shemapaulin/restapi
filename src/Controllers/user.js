import User from "../Models/index.js";

const userRegistration = async (req, res) => {
  try {
    const { username, email, password, createdAt } = req.body;
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
