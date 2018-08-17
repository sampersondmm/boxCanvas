const express = require('express');
const router = express.Router({mergeParams: true});
const {createCanvas,getCanvas,deleteCanvas,updateCanvas} = require('../handlers/canvas');

router.route('/').post(createCanvas);

router.route('/:canvas_id')
  .get(getCanvas)
  .delete(deleteCanvas)
  .put(updateCanvas);

module.exports = router;
