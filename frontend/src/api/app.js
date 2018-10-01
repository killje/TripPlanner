const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

app.all("*", function (req, res, next) {
    var parsedUrl = url.parse(req.url);
    console.log("Got request: ", req.method, parsedUrl.pathname, parsedUrl.query);
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