const express = require("express");

const app = express();
const port = process.env.PORT || 8080; // default port 8080

app.get("/", (req, res) => {
  res.end("Hello iOS Developers!");
});

const bookmarks = {
  compass: "http://ios-compass.lighthouselabs.ca/setup",
  swift: "https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/TheBasics.html#//apple_ref/doc/uid/TP40014097-CH5-ID309"
};

app.get('/bookmarks', (req, res) => {
  res.json(bookmarks);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});