const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("test");
});

app.listen(3000, function () {
    console.log("listening on http://localhost:3000");
});