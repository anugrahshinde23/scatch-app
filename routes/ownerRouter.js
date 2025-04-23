const express = require("express");
const ownerRouter = express.Router();
const ownerModel = require("../models/owners-model");
const { create } = require("domain");

if (process.env.NODE_ENV === "development") {
  ownerRouter.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res
        .status(503)
        .send("owner already exist you can't create another one");
    }


    // let{fullname,email,password} = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
     
    });

    res.status(201).send(createdOwner);
  });
}

ownerRouter.get("/", (req, res) => {
  res.send("Welcome to the Owner Router");
});

module.exports = ownerRouter;
