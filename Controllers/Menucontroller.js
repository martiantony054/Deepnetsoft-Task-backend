const mongoose = require("mongoose");
const menuitem = require("../Models/MenuSchema");
exports.addMenuname = async (req, res) => {
  console.log("inside addmenuname api");
  const { name } = req.body;
  try {
    const menuname = await menuitem.findOne({ name });
    if (menuname) {
      return res.status(401).json("this menu name  already there");
    } else {
      const newmenu = new menuitem({
        name
      });
      await newmenu.save();
      return res.status(200).json(newmenu);
    }
  } catch (e) {
    console.error("error", e);
  }
};

exports.getMenuname = async (req, res) => {
  console.log("inside getmenuname api");

  try {
    const getmenuname = await menuitem.find();
    res.status(200).json(getmenuname);
  } catch (e) {
    res.status(401).json("error in fetching" + e);
  }
};

