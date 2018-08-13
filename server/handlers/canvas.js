const db = require('../models');

exports.createCanvas = async function(req,res,next) {
  try {
    let canvas = await db.Canvas.create({
      canvasData: req.body.canvasData,
      user: req.params.id
    })
    let foundUser = await db.User.findById(req.params.id);
    foundUser.canvas.push(canvas.id);
    await foundUser.save();
    let foundCanvas = await db.Canvas.findById(canvas._id).populate('user', {
      username: true,
      profileImageUrl: true,
    })
    return res.status(200).json(foundCanvas)
  } catch(err) {
    return next(err)
  }
}

exports.getCanvas = async function(req,res,next) {
  try {
    let canvas = await db.Canvas.find(req.params.canvas_id);
    return res.status(200).json(canvas);
  } catch(err){
    return next(err);
  }
}

exports.deleteCanvas = async function(req,res,next) {
  try {
    let foundCanvas = await db.Canvas.findById(req.params.canvas_id);
    await foundCanvas.remove();
    return res.status(200).json(founCanvas)
  } catch(err) {
    return next(err)
  }
}