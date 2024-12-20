// // // import React, { useState, useEffect, useContext } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { AuthContext } from './AuthContext';
// // // import { io } from 'socket.io-client';
// // // import './ChatArea.css';

// // // const socket = io('http://localhost:3000'); // Connect to the Socket.IO server

// // // function ChatArea() {
// // //   const { user, logout } = useContext(AuthContext);
// // //   const navigate = useNavigate();
// // //   const [messages, setMessages] = useState([]);
// // //   const [newMessage, setNewMessage] = useState('');
// // //   const [users, setUsers] = useState([]);
// // //   const [selectedUser, setSelectedUser] = useState(null);
// // //   const [error, setError] = useState(null);

// // //   // Redirect to login if user is not authenticated
// // //   useEffect(() => {
// // //     if (!user) {
// // //       navigate('/');
// // //     } else {
// // //       socket.emit('join', user.user.username); // Notify the server about the logged-in user
// // //     }
// // //   }, [user, navigate]);

// // //   useEffect(() => {
// // //     if (!user) return;

// // //     const fetchUsers = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:5000/users');
// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch users');
// // //         }
// // //         const data = await response.json();
// // //         setUsers(data);
// // //       } catch (err) {
// // //         setError(err.message);
// // //       }
// // //     };

// // //     fetchUsers();

// // //     // Listen for incoming private messages
// // //     socket.on('new message', (message) => {
// // //       if (
// // //         message.sender === selectedUser ||
// // //         message.recipient === user.user.username
// // //       ) {
// // //         setMessages((prevMessages) => [...prevMessages, message]);
// // //       }
// // //     });

// // //     return () => {
// // //       socket.off('new message'); // Cleanup listener
// // //     };
// // //   }, [selectedUser, user.user.username]);

// // //   const fetchMessages = async (recipient) => {
// // //     try {
// // //       const response = await fetch(
// // //         `http://localhost:5000/messg/messages/${user.user.username}/${recipient}`
// // //       );
// // //       if (!response.ok) {
// // //         throw new Error('Failed to fetch messages');
// // //       }
// // //       const data = await response.json();
// // //       setMessages(data);
// // //     } catch (err) {
// // //       setError(err.message);
// // //     }
// // //   };

// // //   const handleUserClick = (username) => {
// // //     setSelectedUser(username); // Set the selected user
// // //     fetchMessages(username); // Fetch chat history
// // //   };

// // //   const handleSendMessage = () => {

// // //     console.log("hiiiiiii");
// // //     if (newMessage.trim() && selectedUser) {
// // //       const message = {
// // //         text: newMessage,
// // //         sender: user.user.username,
// // //         recipient: selectedUser,
// // //         timestamp: new Date().toISOString(),
// // //       };
// // //       console.log("hiiiiiii2");
// // //       socket.emit('new message', message); // Send message to server
// // //       console.log(message);
// // //       // Update chat locally
// // //       setMessages((prevMessages) => [...prevMessages, message]);
// // //       setNewMessage('');
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     logout();
// // //     navigate('/');
// // //   };

// // //   if (!user) {
// // //     return <p>Redirecting to login...</p>;
// // //   }

// // //   return (
// // //     <div className="chat-wrapper">
// // //       {/* Sidebar */}
// // //       <div className="sidebar">
// // //         <div className="sidebar-header">
// // //           <h2>Contacts</h2>
// // //         </div>
// // //         <ul className="user-list">
// // //           {users.map((userItem) => (
// // //             <li
// // //               key={userItem._id}
// // //               className={`user-item ${
// // //                 selectedUser === userItem.username ? 'active' : ''
// // //               }`}
// // //               onClick={() => handleUserClick(userItem.username)}
// // //             >
// // //               {userItem.username}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>

// // //       {/* Chat Area */}
// // //       <div className="chat-container">
// // //         <div className="chat-header">
// // //           <div className="current-user">
// // //             Logged in as: <strong>{user.user.username}</strong>
// // //           </div>
// // //           <button className="logout-button" onClick={handleLogout}>
// // //             Logout
// // //           </button>
// // //         </div>

// // //         {selectedUser ? (
// // //           <>
// // //             <div className="chat-header">
// // //               <h3>Chatting with {selectedUser}</h3>
// // //             </div>
// // //             <div className="message-list">
// // //               {messages.map((msg, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className={`message ${
// // //                     msg.sender === user.user.username ? 'sent' : 'received'
// // //                   }`}
// // //                 >
// // //                   <p>{msg.text}</p>
// // //                   <span className="timestamp">
// // //                     {new Date(msg.timestamp).toLocaleTimeString([], {
// // //                       hour: '2-digit',
// // //                       minute: '2-digit',
// // //                     })}
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             <form
// // //               className="message-form"
// // //               onSubmit={(e) => {
// // //                 e.preventDefault();
// // //                 handleSendMessage();
// // //               }}
// // //             >
// // //               <input
// // //                 type="text"
// // //                 placeholder="Type a message..."
// // //                 value={newMessage}
// // //                 onChange={(e) => setNewMessage(e.target.value)}
// // //               />
// // //               <button type="submit">Send</button>
// // //             </form>
// // //           </>
// // //         ) : (
// // //           <div className="no-chat">
// // //             <h3>Select a user to start chatting</h3>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ChatArea;



// // import React, { useState, useEffect, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { AuthContext } from './AuthContext';
// // import { io } from 'socket.io-client';
// // import './ChatArea.css';

// // const socket = io('http://localhost:5000'); // Connect to the Socket.IO server

// // function ChatArea() {
// //   const { user, logout } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [users, setUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [error, setError] = useState(null);

// //   // Redirect to login if user is not authenticated
// //   useEffect(() => {
// //     if (!user) {
// //       navigate('/');
// //     } else {
// //       socket.emit('join', user?.user?.username); // Notify the server about the logged-in user
// //     }
// //   }, [user, navigate]);

// //   useEffect(() => {
// //     if (!user) return;

// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5000/users');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch users');
// //         }
// //         const data = await response.json();
// //         setUsers(data);
// //       } catch (err) {
// //         setError(err.message);
// //       }
// //     };

// //     fetchUsers();

// //     // Listen for incoming private messages
// //     socket.on('new message', (message) => {
// //       if (
// //         message.sender === selectedUser ||
// //         message.recipient === user?.user?.username
// //       ) {
// //         setMessages((prevMessages) => [...prevMessages, message]);
// //       }
// //     });

// //     return () => {
// //       socket.off('new message'); // Cleanup listener
// //     };
// //   }, [selectedUser, user?.user?.username]);

// //   const fetchMessages = async (recipient) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:5000/messg/messages/${user?.user?.username}/${recipient}`
// //       );
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch messages');
// //       }
// //       const data = await response.json();
// //       setMessages(data);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   const handleUserClick = (username) => {
// //     setSelectedUser(username); // Set the selected user
// //     fetchMessages(username); // Fetch chat history
// //   };

// //   const handleSendMessage = () => {
// //     if (newMessage.trim() && selectedUser) {
// //       const message = {
// //         text: newMessage,
// //         sender: user?.user?.username,
// //         recipient: selectedUser,
// //         timestamp: new Date().toISOString(),
// //       };

// //       socket.emit('new message', message); // Send message to server

// //       // Update chat locally
// //       setMessages((prevMessages) => [...prevMessages, message]);
// //       setNewMessage('');
// //     }
// //   };

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/');
// //   };

// //   // Handle the case when the user logs out and the component tries to render
// //   if (!user) {
// //     return <p>Redirecting to login...</p>;
// //   }

// //   return (
// //     <div className="chat-wrapper">
// //       {/* Sidebar */}
// //       <div className="sidebar">
// //         <div className="sidebar-header">
// //           <h2>Contacts</h2>
// //         </div>
// //         <ul className="user-list">
// //           {users.map((userItem) => (
// //             <li
// //               key={userItem._id}
// //               className={`user-item ${
// //                 selectedUser === userItem.username ? 'active' : ''
// //               }`}
// //               onClick={() => handleUserClick(userItem.username)}
// //             >
// //               {userItem.username}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Chat Area */}
// //       <div className="chat-container">
// //         <div className="chat-header">
// //           <div className="current-user">
// //             Logged in as: <strong>{user?.user?.username}</strong>
// //           </div>
// //           <button className="logout-button" onClick={handleLogout}>
// //             Logout
// //           </button>
// //         </div>

// //         {selectedUser ? (
// //           <>
// //             <div className="chat-header">
// //               <h3>Chatting with {selectedUser}</h3>
// //             </div>
// //             <div className="message-list">
// //               {messages.map((msg, index) => (
// //                 <div
// //                   key={index}
// //                   className={`message ${
// //                     msg.sender === user?.user?.username ? 'sent' : 'received'
// //                   }`}
// //                 >
// //                   <p>{msg.text}</p>
// //                   <span className="timestamp">
// //                     {new Date(msg.timestamp).toLocaleTimeString([], {
// //                       hour: '2-digit',
// //                       minute: '2-digit',
// //                     })}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //             <form
// //               className="message-form"
// //               onSubmit={(e) => {
// //                 e.preventDefault();
// //                 handleSendMessage();
// //               }}
// //             >
// //               <input
// //                 type="text"
// //                 placeholder="Type a message..."
// //                 value={newMessage}
// //                 onChange={(e) => setNewMessage(e.target.value)}
// //               />
// //               <button type="submit">Send</button>
// //             </form>
// //           </>
// //         ) : (
// //           <div className="no-chat">
// //             <h3>Select a user to start chatting</h3>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ChatArea;




// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';
// import { io } from 'socket.io-client';
// import './ChatArea.css';

// const socket = io('http://localhost:5000'); // Connect to the Socket.IO server

// function ChatArea() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]); // Messages for selected user
//   const [newMessage, setNewMessage] = useState('');
//   const [users, setUsers] = useState([]); // All available users
//   const [selectedUser, setSelectedUser] = useState(null); // Current chat recipient
//   const [error, setError] = useState(null);

//   // Redirect to login if user is not authenticated
//   useEffect(() => {
//     if (!user) {
//       navigate('/');
//     } else {
//       socket.emit('join', user?.user?.username); // Notify the server about the logged-in user
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     if (!user) return;

//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchUsers();

//     // Listen for incoming private messages
//     socket.on('new message', (message) => {
//       if (
//         message.sender === selectedUser ||
//         message.recipient === user?.user?.username
//       ) {
//         setMessages((prevMessages) => [...prevMessages, message]);
//       }
//     });

//     return () => {
//       socket.off('new message'); // Cleanup listener
//     };
//   }, [selectedUser, user?.user?.username]);

//   const fetchMessages = async (recipient) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/messg/messages/${user?.user?.username}/${recipient}`
//       );
//       if (!response.ok) {
//         throw new Error('Failed to fetch messages');
//       }
//       const data = await response.json();
//       setMessages(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleUserClick = (username) => {
//     setSelectedUser(username); // Set the selected user
//     setMessages([]); // Clear the chat history temporarily
//     fetchMessages(username); // Fetch chat history
//   };

//   const handleSendMessage = async () => {
//     if (newMessage.trim() && selectedUser) {
//       const message = {
//         text: newMessage,
//         sender: user?.user?.username,
//         recipient: selectedUser,
//         timestamp: new Date().toISOString(),
//       };

//       try {
//         socket.emit('new message', message); // Send message to server

//         // Update chat locally
//         setMessages((prevMessages) => [...prevMessages, message]);
//         setNewMessage('');
//       } catch (err) {
//         console.error('Error sending message:', err.message);
//         setError('Failed to send message');
//       }
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   // Handle the case when the user logs out and the component tries to render
//   if (!user) {
//     return <p>Redirecting to login...</p>;
//   }

//   return (
//     <div className="chat-wrapper">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="sidebar-header">
//           <h2>Contacts</h2>
//         </div>
//         <ul className="user-list">
//           {users.map((userItem) => (
//             <li
//               key={userItem._id}
//               className={`user-item ${
//                 selectedUser === userItem.username ? 'active' : ''
//               }`}
//               onClick={() => handleUserClick(userItem.username)}
//             >
//               {userItem.username}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Chat Area */}
//       <div className="chat-container">
//         <div className="chat-header">
//           <div className="current-user">
//             Logged in as: <strong>{user?.user?.username}</strong>
//           </div>
//           <button className="logout-button" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>

//         {selectedUser ? (
//           <>
//             <div className="chat-header">
//               <h3>Chatting with {selectedUser}</h3>
//             </div>
//             <div className="message-list">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`message ${
//                     msg.sender === user?.user?.username ? 'sent' : 'received'
//                   }`}
//                 >
//                   <p>{msg.text}</p>
//                   <span className="timestamp">
//                     {new Date(msg.timestamp).toLocaleTimeString([], {
//                       hour: '2-digit',
//                       minute: '2-digit',
//                     })}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <form
//               className="message-form"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSendMessage();
//               }}
//             >
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//               />
//               <button type="submit">Send</button>
//             </form>
//           </>
//         ) : (
//           <div className="no-chat">
//             <h3>Select a user to start chatting</h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ChatArea;



import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { io } from 'socket.io-client';
import './ChatArea.css';

const socket = io('http://localhost:5000'); // Connect to the Socket.IO server

function ChatArea() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      socket.emit('join', user?.user?.username); // Notify the server about the logged-in user
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();


        const usernameToDelete = user.user.username; // Get the username to delete
const updatedData = data.filter(item => item.username !== usernameToDelete);
//console.log(updatedData);

        //console.log(data);
        setUsers(updatedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();

    // Listen for incoming private messages
    socket.on('new message', (message) => {
      if (message.chatId === getChatId(user?.user?.username, selectedUser)) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    return () => {
      socket.off('new message'); // Cleanup listener
    };
  }, [selectedUser, user?.user?.username]);

  const getChatId = (user1, user2) => {
    // Create a unique chatId based on usernames
    return [user1, user2].sort().join('_');
  };

  const fetchMessages = async (recipient) => {
    const chatId = getChatId(user?.user?.username, recipient);

    try {
      const response = await fetch(`http://localhost:5000/messg/messages/${chatId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUserClick = (username) => {
    setSelectedUser(username);
    fetchMessages(username);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const chatId = getChatId(user?.user?.username, selectedUser);

      const message = {
        text: newMessage,
        sender: user?.user?.username,
        recipient: selectedUser,
        chatId,
        timestamp: new Date().toISOString(),
      };

      socket.emit('new message', message);

      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="chat-wrapper">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Contacts</h2>
        </div>
        <ul className="user-list">
          {users.map((userItem) => (
            <li
              key={userItem._id}
              className={`user-item ${
                selectedUser === userItem.username ? 'active' : ''
              }`}
              onClick={() => handleUserClick(userItem.username)}
            >
              {userItem.username}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-container">
        <div className="chat-header">
          <div className="current-user">
            Logged in as: <strong>{user?.user?.username}</strong>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {selectedUser ? (
          <>
            <div className="chat-header">
              <h3>Chatting with {selectedUser}</h3>
            </div>
            <div className="message-list">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === user?.user?.username ? 'sent' : 'received'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="timestamp">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              ))}
            </div>
            <form
              className="message-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className="no-chat">
            <h3>Select a user to start chatting</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatArea;
