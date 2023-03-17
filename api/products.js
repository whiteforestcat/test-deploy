const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({ message: "get data successful" });
  } catch (error) {
    console.log(error);
    return res.json("server error");
  }
});

module.exports = router;
