let express = require("express");
let router = express.Router();
let bodyParser = require("body-parser");

const request = require("request");

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

let handleNextScript = (article, scriptList, index, tab, callback) => {
    scriptList[index](article, (res) => {
        tab.push({...res});
        if (index === scriptList.length - 1) {
            callback(tab);
        } else {
            handleNextScript(article, scriptList, index + 1, tab, callback)
        }
    })
}

router.get("/article/information", function (req, res) {
    if (!req.query.name) return res.status(400).send("Name is needed");

    let scriptList = [];
    // handleNextScript(req.query.name, scriptList, 0, [], (tab) => res.status(200).send(tab));
});

module.exports = router;
