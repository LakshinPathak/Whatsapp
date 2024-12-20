// // // // // const express = require('express');
// // // // // const dotenv = require('dotenv');
// // // // // const cors = require('cors');
// // // // // const connectDB = require('./config/db');

// // // // // // Load environment variables
// // // // // dotenv.config();

// // // // // // Initialize app
// // // // // const app = express();
// // // // // const PORT = process.env.PORT || 5000;

// // // // // // Middleware
// // // // // app.use(cors());
// // // // // app.use(express.json());
// // // // // app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// // // // // // app.use(cors({ origin: 'http://localhost:3000' }));

// // // // // // Connect to MongoDB Atlas
// // // // // connectDB();

// // // // // // Routes
// // // // // app.use('/messages', require('./routes/messages'));
// // // // // // Add this line to include user routes
// // // // // app.use('/users', require('./routes/users'));

// // // // // // Start server
// // // // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const dotenv = require('dotenv');
// // // // const cors = require('cors');
// // // // const messagRoutes = require('./routes/messages'); 
// // // // const usersRoutes = require('./routes/users'); // Import user routes

// // // // dotenv.config();

// // // // const app = express();
// // // // const PORT = 5000;

// // // // // Middleware
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // // Connect to MongoDB
// // // // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // // //   .then(() => console.log('MongoDB connected'))
// // // //   .catch(err => console.error('MongoDB connection error:', err));

// // // // // Mount routes
// // // // app.use('/users', usersRoutes); 
// // // // app.use('/messg', messagRoutes);


// // // // // Start the server
// // // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const dotenv = require('dotenv');
// // // const cors = require('cors');
// // // const http = require('http');
// // // const { Server } = require('socket.io');
// // // const messagRoutes = require('./routes/messages');
// // // const usersRoutes = require('./routes/users'); // Import user routes

// // // dotenv.config();

// // // const app = express();
// // // const server = http.createServer(app); // Create an HTTP server
// // // const io = new Server(server, {
// // //   cors: {
// // //     origin: 'http://localhost:3000', // Allow requests from your frontend
// // //     methods: ['GET', 'POST'],
// // //   },
// // // });
// // // const PORT = process.env.PORT || 5000;

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Connect to MongoDB
// // // mongoose
// // //   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // //   .then(() => console.log('MongoDB connected'))
// // //   .catch((err) => console.error('MongoDB connection error:', err));

// // // // Mount routes
// // // app.use('/users', usersRoutes);
// // // app.use('/messg', messagRoutes);

// // // // Store active users and their socket IDs
// // // const activeUsers = new Map();

// // // // Socket.IO integration
// // // io.on('connection', (socket) => {
// // //   console.log(`User connected: ${socket.id}`);

// // //   // Handle user joining with username
// // //   socket.on('join', (username) => {
// // //     activeUsers.set(username, socket.id);
// // //     socket.username = username; // Save username in socket for easy access
// // //     console.log(`User ${username} joined with socket ID: ${socket.id}`);
// // //   });

// // //   // Handle private messaging
// // //   socket.on('private message', ({ recipient, message }) => {
// // //     const recipientSocketId = activeUsers.get(recipient);
// // //     if (recipientSocketId) {
// // //       io.to(recipientSocketId).emit('private message', {
// // //         sender: socket.username,
// // //         message,
// // //       });
// // //       console.log(`Message from ${socket.username} to ${recipient}: ${message}`);
// // //     } else {
// // //       console.log(`Recipient ${recipient} is not connected.`);
// // //     }
// // //   });

// // //   // Handle user disconnect
// // //   socket.on('disconnect', () => {
// // //     console.log(`User disconnected: ${socket.id}`);
// // //     activeUsers.delete(socket.username); // Remove the user from active users
// // //   });
// // // });

// // // // Start the server
// // // server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// // const express = require('express');
// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');
// // const cors = require('cors');
// // const http = require('http');
// // const { Server } = require('socket.io');
// // const messageRoutes = require('./routes/messages');
// // const userRoutes = require('./routes/users'); // Import user routes

// // dotenv.config();

// // const app = express();
// // const server = http.createServer(app); // Create an HTTP server
// // const io = new Server(server, {
// //   cors: {
// //     origin: 'http://localhost:3000', // Allow requests from your frontend
// //     methods: ['GET', 'POST'],
// //   },
// // });
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Connect to MongoDB
// // mongoose
// //   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch((err) => console.error('MongoDB connection error:', err));

// // // Mount routes
// // app.use('/users', userRoutes);
// // app.use('/messg', messageRoutes);

// // // Store active users and their socket IDs
// // const activeUsers = new Map();

// // // Socket.IO integration
// // io.on('connection', (socket) => {
// //   console.log(`User connected: ${socket.id}`);

// //   // Handle user joining with username
// //   socket.on('join', (username) => {
// //     activeUsers.set(username, socket.id);
// //     socket.username = username; // Save username in socket for easy access
// //     console.log(`User ${username} joined with socket ID: ${socket.id}`);
// //   });

// //   // Handle private messaging
// //   socket.on('private message', ({ recipient, message }) => {
// //     const recipientSocketId = activeUsers.get(recipient);
// //     if (recipientSocketId) {
// //       io.to(recipientSocketId).emit('private message', {
// //         sender: socket.username,
// //         message,
// //       });
// //       console.log(`Message from ${socket.username} to ${recipient}: ${message}`);
// //     } else {
// //       console.log(`Recipient ${recipient} is not connected.`);
// //     }
// //   });

// //   // Handle user disconnect
// //   socket.on('disconnect', () => {
// //     console.log(`User disconnected: ${socket.id}`);
// //     activeUsers.delete(socket.username); // Remove the user from active users
// //   });
// // });

// // // Start the server
// // server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));



// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const http = require('http');
// const { Server } = require('socket.io');
// const Message = require('./models/Message'); // Import your Message model
// const messagRoutes = require('./routes/messages');
// const usersRoutes = require('./routes/users'); // Import user routes
// dotenv.config();

// const app = express();
// const server = http.createServer(app); // Create an HTTP server
// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000', // Allow requests from your frontend
//     methods: ['GET', 'POST'],
//   },
// });
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Mount routes
// app.use('/users', usersRoutes);
// app.use('/messg', messagRoutes);

// // Store active users and their socket IDs
// const activeUsers = new Map();

// // Socket.IO integration
// io.on('connection', (socket) => {
//   console.log(`User connected: ${socket.id}`);

//   // Handle user joining with username
//   socket.on('join', (username) => {
//     activeUsers.set(username, socket.id);
//     socket.username = username; // Save username in socket for easy access
//     console.log(`User ${username} joined with socket ID: ${socket.id}`);
//   });

//   // Handle private messaging and save to database
//   socket.on('new message', async (message) => {
//     try {
//       // Save message to the database
      
//       const savedMessage = new Message({
//         text: message.text,
//         sender: message.sender,
//         recipient: message.recipient,
//         timestamp: message.timestamp,
//       });

//       await savedMessage.save();

//       // Emit message to the recipient
//       const recipientSocketId = activeUsers.get(message.recipient);
//       if (recipientSocketId) {
//         io.to(recipientSocketId).emit('new message', savedMessage);
//       }

//       // Emit message back to the sender for acknowledgment
//       socket.emit('message saved', savedMessage);
//     } catch (err) {
//       console.error('Error saving message:', err.message);
//     }
//   });

//   // Handle user disconnect
//   socket.on('disconnect', () => {
//     console.log(`User disconnected: ${socket.id}`);
//     activeUsers.delete(socket.username); // Remove the user from active users
//   });
// });

// // Start the server
// server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




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
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Adjust based on frontend origin
    methods: ['GET', 'POST'],
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
