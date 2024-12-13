const express = require('express');
const router = express.Router();

const menucontrol = require('../Controllers/Menucontroller');
const itemcontrol = require('../Controllers/Itemcontroller');

router.post('/addmenuname', menucontrol.addMenuname);
router.get('/getmenuname', menucontrol.getMenuname);

router.post('/additem', itemcontrol.additem);
router.get('/getitem', itemcontrol.getitem);  // Filters items by category

module.exports = router;
