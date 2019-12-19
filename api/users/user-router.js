const router = require("express").Router();

const Users = require("./user-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to retrieve users" });
    });
});

module.exports = router;
