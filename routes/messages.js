// // // const express = require('express');
// // // const router = express.Router();
// // // const Message = require('../models/Message');

// // // // Get all messages
// // // router.get('/messages', async (req, res) => {
// // //   try {
// // //     const messages = await Message.find().sort({ timestamp: 1 }); // Sort by timestamp
// // //     res.json(messages);
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Failed to fetch messages' });
// // //   }
// // // });

// // // // Create a new message
// // // router.post('/newmessage', async (req, res) => {
// // //   try {
// // //     const { text, sender, timestamp } = req.body;

// // //     // Validate required fields
// // //     if (!text || !sender) {
// // //       return res.status(400).json({ error: 'Text and sender are required' });
// // //     }

// // //     const message = new Message({ text, sender, timestamp: timestamp || Date.now() });
// // //     await message.save();

// // //     res.status(201).json(message);
// // //   } catch (err) {
// // //     res.status(500).json({ error: 'Failed to send message' });
// // //   }
// // // });

// // // module.exports = router;



// // const express = require('express');
// // const router = express.Router();
// // const Message = require('../models/Message');

// // // Get all messages
// // router.get('/messages', async (req, res) => {
// //   try {
// //     const messages = await Message.find().sort({ timestamp: 1 });
// //     res.status(200).json(messages);
// //   } catch (err) {
// //     console.error('Error fetching messages:', err.message);
// //     res.status(500).json({ error: 'Failed to fetch messages' });
// //   }
// // });

// // // Get messages between two users
// // router.get('/messages/:sender/:recipient', async (req, res) => {
// //   const { sender, recipient } = req.params;
// //   try {
// //     const messages = await Message.find({
// //       $or: [
// //         { sender, recipient },
// //         { sender: recipient, recipient: sender },
// //       ],
// //     }).sort({ timestamp: 1 });

// //     res.status(200).json(messages);
// //   } catch (err) {
// //     console.error('Error fetching messages:', err.message);
// //     res.status(500).json({ error: 'Failed to fetch messages between users' });
// //   }
// // });

// // // Delete a message by ID
// // router.delete('/messages/:id', async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const deletedMessage = await Message.findByIdAndDelete(id);

// //     if (!deletedMessage) {
// //       return res.status(404).json({ error: 'Message not found' });
// //     }

// //     res.status(200).json({ message: 'Message deleted successfully' });
// //   } catch (err) {
// //     console.error('Error deleting message:', err.message);
// //     res.status(500).json({ error: 'Failed to delete message' });
// //   }
// // });

// // module.exports = (io) => {
// //   // Socket.IO event for real-time messaging
// //   io.on('connection', (socket) => {
// //     console.log(`User connected: ${socket.id}`);

// //     // Handle new message
// //     socket.on('new message', async ({ text, sender, recipient }) => {
// //       try {
// //         // Save message to the database
// //         const message = new Message({
// //           text,
// //           sender,
// //           recipient,
// //           timestamp: Date.now(),
// //         });

// //         await message.save();

// //         // Emit message to the recipient
// //         const recipientSocketId = getRecipientSocketId(recipient);
// //         if (recipientSocketId) {
// //           io.to(recipientSocketId).emit('new message', message);
// //         }

// //         // Emit message to the sender for acknowledgment
// //         socket.emit('message saved', message);
// //       } catch (err) {
// //         console.error('Error handling new message:', err.message);
// //       }
// //     });

// //     // Handle user disconnect
// //     socket.on('disconnect', () => {
// //       console.log(`User disconnected: ${socket.id}`);
// //     });
// //   });

// //   return router;
// // };

// // // Helper function to get recipient's socket ID
// // const activeUsers = new Map(); // Replace this with a real session manager if needed
// // function getRecipientSocketId(recipient) {
// //   return activeUsers.get(recipient);
// // }



// const express = require('express');
// const router = express.Router();
// const Message = require('../models/Message');

// // Get all messages
// router.get('/messages', async (req, res) => {
//   try {
//     const messages = await Message.find().sort({ timestamp: 1 });
//     res.status(200).json(messages);
//   } catch (err) {
//     console.error('Error fetching messages:', err.message);
//     res.status(500).json({ error: 'Failed to fetch messages' });
//   }
// });

// // Get messages between two users
// router.get('/messages/:sender/:recipient', async (req, res) => {
//   const { sender, recipient } = req.params;
//   try {
//     const messages = await Message.find({
//       $or: [
//         { sender, recipient },
//         { sender: recipient, recipient: sender },
//       ],
//     }).sort({ timestamp: 1 });

//     res.status(200).json(messages);
//   } catch (err) {
//     console.error('Error fetching messages:', err.message);
//     res.status(500).json({ error: 'Failed to fetch messages between users' });
//   }
// });

// // Delete a message by ID
// router.delete('/messages/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedMessage = await Message.findByIdAndDelete(id);

//     if (!deletedMessage) {
//       return res.status(404).json({ error: 'Message not found' });
//     }

//     res.status(200).json({ message: 'Message deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting message:', err.message);
//     res.status(500).json({ error: 'Failed to delete message' });
//   }
// });

// module.exports = (io) => {
//   const activeUsers = new Map(); // Map to store active users and their socket IDs

//   // Socket.IO event for real-time messaging
//   io.on('connection', (socket) => {
//     console.log(`User connected: ${socket.id}`);

//     // Handle user joining
//     socket.on('join', (username) => {
//       activeUsers.set(username, socket.id);
//       socket.username = username;
//       console.log(`User ${username} joined with socket ID: ${socket.id}`);
//     });

//     // Handle new message
//     socket.on('new message', async ({ text, sender, recipient }) => {
//       try {
//         const message = new Message({
//           text,
//           sender,
//           recipient,
//           timestamp: Date.now(),
//         });

//         await message.save();

//         const recipientSocketId = getRecipientSocketId(recipient);
//         if (recipientSocketId) {
//           io.to(recipientSocketId).emit('new message', message);
//         }

//         socket.emit('message saved', message); // Emit acknowledgment to sender
//       } catch (err) {
//         console.error('Error saving message:', err.message);
//       }
//     });

//     // Handle user disconnect
//     socket.on('disconnect', () => {
//       if (socket.username) {
//         activeUsers.delete(socket.username);
//         console.log(`User ${socket.username} disconnected`);
//       }
//     });
//   });

//   function getRecipientSocketId(recipient) {
//     return activeUsers.get(recipient);
//   }

//   return router;
// };




const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get messages by chatId
router.get('/messages/:chatId', async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await Message.find({ chatId }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error fetching messages by chatId:', err.message);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Save a new message
router.post('/messages', async (req, res) => {
  const { text, sender, recipient, chatId, timestamp } = req.body;

  try {
    const message = new Message({
      text,
      sender,
      recipient,
      chatId,
      timestamp: timestamp || Date.now(),
    });

    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    console.error('Error saving message:', err.message);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

module.exports = router;
