const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const Test = require('./models/index');

mongoose
  .connect(
    'mongodb+srv://essam:1234@test1-jvuqg.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .catch((err) => console.log(err));
mongoose.connection.once('open', () => console.log('database is connected'));

const app = express();

const router = express.Router();

router.get('/', async (req, res) => {
  const test = await Test.create({ name: 'essam harous' });
  res.json(test);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
