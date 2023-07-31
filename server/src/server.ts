import "module-alias/register";

import express from "express";
import http from "http";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello, this is a text response from the backend!");
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () =>
  console.log(`Server is running on port ${PORT} now!`)
);
