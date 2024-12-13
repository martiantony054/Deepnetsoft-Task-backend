const mongoose = require("mongoose");
const i = require("../Models/Itemschema");

exports.additem = async (req, res) => {
  console.log("inside additem api");
  const { itemname, description, price, category } = req.body; 
  try {
    const existingItem = await i.findOne({ itemname });
    if (existingItem) {
      return res.status(401).json("Item already exists");
    } else {
      const newItem = new i({
        itemname,
        description,
        price,
        category,
      });
      await newItem.save();
      return res.status(200).json(newItem);
    }
  } catch (e) {
    console.error("Error adding item:", e);
    res.status(500).json("Internal server error");
  }
};

exports.getitem = async (req, res) => {
  console.log("inside getitem api");

  try {
    const { category } = req.query; 
    console.log(req.query);  
    if (!category) {
      return res.status(401).json({ message: 'Category is required' });

      
    }

    // Find items that match the category
    const menuItems = await i.find({ category });
    
    console.log("Fetched Menu Items:", menuItems);

    if (menuItems.length === 0) {
      return res.status(404).json({ message: 'No items found for this category' });
    }

    res.json({ data: menuItems });
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
