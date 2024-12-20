import React, { useState } from 'react';

function Footer() {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      // Send message to backend
      fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: input, sender: 'self' }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Message sent:', data);
          setInput(''); // Clear input
        })
        .catch((error) => console.error('Error sending message:', error));
    }
  };

  return (
    <footer className="footer">
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </footer>
  );
}

export default Footer;
