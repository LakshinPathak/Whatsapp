
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const Message = require('./models/Message');
const messagRoutes = require('./routes/messages');
const usersRoutes = require('./routes/users');

dotenv.config();

const app = express();
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000', // Adjust based on frontend origin
//     methods: ['GET', 'POST'],
//   },
// });


const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:3000', // Local development
      'https://whatsapp-frontend-2vy0.onrender.com', // Deployed frontend
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/users', usersRoutes);
app.use('/messg', messagRoutes);

const activeUsers = new Map(); // Active users map

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handle user joining
  socket.on('join', (username) => {
    activeUsers.set(username, socket.id);
    socket.username = username; // Store the username on the socket
    console.log(`User ${username} joined with socket ID: ${socket.id}`);
  });

  // Handle private messaging and save to database
  socket.on('new message', async (message) => {
    const { text, sender, recipient, chatId } = message;

    try {
      const savedMessage = new Message({
        text,
        sender,
        recipient,
        chatId,
        timestamp: Date.now(),
      });

      await savedMessage.save();

      // Emit message to the recipient
      const recipientSocketId = activeUsers.get(recipient);
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('new message', savedMessage);
      }

      // Emit message back to the sender
      socket.emit('message saved', savedMessage);
    } catch (err) {
      console.error('Error saving message:', err.message);
    }
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    activeUsers.delete(socket.username); // Remove from active users
  });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
