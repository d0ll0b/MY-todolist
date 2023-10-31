const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("*", (req, res) => {
  fs.readFile('public/images/404notfound.jpg', (err, data) => {
    if (err) {
      // 如果出現錯誤，發送錯誤訊息
      res.send("404 Not Found.");
    } else {
      res.contentType('image/jpeg'); // 設置響應類型為圖像/jpeg
      res.send(data); // 發送圖像數據
    }
  });
}); 

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});