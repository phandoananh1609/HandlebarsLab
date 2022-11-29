var express = require("express");
var router = express.Router();
var data = require("../models/data");

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("home", { title: "Jeopardize Contest " });
});
router.get("/task1", function(req, res, next) {
    res.render("tasks/task1", { title: "Inspiring Quotes" });
});
router.get("/task2", function(req, res, next) {
    res.render("tasks/task2", { title: "Jars Saving" });
});
router.get("/task3", function(req, res, next) {
    res.render("tasks/task3", { title: "TV Sales" });
});

router.get("/task4", function(req, res, next) {
    res.render("tasks/task4", {
        title: "Zodiac Characteristics",
        data: data.zodiacs,
    });
});

router.get("/task4/:name", function(req, res, next) {
    const nameZodiac = req.params.name;

    res.render("tasks/task4-detail", {
        title: nameZodiac,
        data: data.zodiacs.find((zodiac) => zodiac.name == nameZodiac),
    });
});

module.exports = router;