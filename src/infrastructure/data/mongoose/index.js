const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
  console.log('err', err);
});
mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected');
});

module.exports = mongoose;
