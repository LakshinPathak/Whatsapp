// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   sender: { type: String, required: true },
//   recipient: { type: String, required: true },
//   timestamp: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Message', messageSchema);


// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   sender: { type: String, required: true },
//   recipient: { type: String, required: true },
//   chatId: { type: String, required: true }, // Unique chat identifier
//   timestamp: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Message', messageSchema);


const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  chatId: { type: String, required: true }, // Unique chat identifier
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);
