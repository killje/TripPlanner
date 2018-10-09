const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.all("*", function (req, res, next) {
    var parsedUrl = url.parse(req.url);
    console.log("Got request: ", req.method, parsedUrl.pathname, parsedUrl.query, req.body);
    var filePath = path.join(__dirname, parsedUrl.pathname.replace(/^\/?api/, ""));
    try {
        var fileContents = fs.readFileSync(filePath);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.parse(fileContents));
    } catch (err) {
        res.sendStatus(404);
    }
});

app.listen(4000, function(){
    console.log("Mock server is listening.");
});


module.exports = app;