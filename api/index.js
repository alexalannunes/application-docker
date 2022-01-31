const express = require("express");
const app = express();
const port = process.env.PORT || 3333;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
