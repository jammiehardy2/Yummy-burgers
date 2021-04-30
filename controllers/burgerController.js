const express = require("express");
const burger = require("../models/burgers.js");
const router = require("express").Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    const burgerObject = {
      burgers: data,
    };
    res.render("index", burgerObject);
  });
});
// router.post
// router.put
module.exports = router;
//router.post
