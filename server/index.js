require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const canvasRoutes = require('./routes/canvas');
const db = require('./models')
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/canvas',
  loginRequired,
  ensureCorrectUser,
  canvasRoutes
);

app.get('/api/canvas', loginRequired, async function(req,res,next){
  try {
    let canvas = await db.Canvas.find()
      .sort({createdAt: 'desc'})
      .populate('user', {
        username: true,
        profileImageUrl: true,
      })
      return res.status(200).json(canvas);
  } catch(err) {
    return next(err)
  }
})

app.use((req,res,next) => {
  let err = new Error('NOT FOUND');
  err.status = 404;
  next(err)
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`))
