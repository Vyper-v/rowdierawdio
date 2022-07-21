import express from "express";
import chalk from "chalk";

import route from "./Routes/number.js"

const app = express();
const port = process.env.PORT || 8080;

// middleware

app.use(express.static("public"));
app.use("/api",route)

// TODO: ruta para stremear musica
app.get("/song/:name", (req, res) => {
  const data = fs.createReadStream(`./public/songs/${req.params.name}.mp3`);
  res.setHeader("Content-Type", "audio/mpeg");
  data.pipe(res);
});

app.listen(port, () => {
  console.log(
    "Server listening on " + chalk.yellow(`http://localhost:${port}`)
  );
});
