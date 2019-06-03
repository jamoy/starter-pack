require("dotenv").config();

const express = require("express");

express.get("/.well-known/healthcheck", (_, res) => res.send(""));

express.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Express is listening to ${process.env.HOST}:${process.env.PORT}`
  );
});
