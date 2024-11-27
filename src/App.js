// src/App.js

import React from 'react';
import Chatbot from './components/Chatbot';
import './App.css'; // Import CSS for styling
import MongooseDocs from './components/MongooseDocs';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Node.js Documentation</h2>
        <ul>
          <li><a href="#examples">Examples</a></li>
          {/* <li><a href="#chatbot">Chatbot</a></li> */}
          <li><a href="#mongoose-docs">Mongoose Documentation</a></li> {/* New link */}
        </ul>
      </nav>
      <header className="App-header">
        <h1>Node.js Implementation Examples</h1>
        <p>
          Welcome to our documentation site! Here you will find various examples and explanations
          of how to implement different features using Node.js. Whether you are a beginner or an
          experienced developer, we hope you find this resource helpful.
        </p>
      </header>
      <main>
        <section id="examples" className="examples">
          <h2>Example 1: Simple HTTP Server</h2>
          <pre>
            {`
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
                        `}
          </pre>

          <h2>Example 2: Express.js Basic Setup</h2>
          <pre>
            {`
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
                        `}
          </pre>

          <h2>Example 3: File System Operations</h2>
          <pre>
            {`
const fs = require('fs');

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Write to a file
fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File has been written!');
});
                        `}
          </pre>

          <h2>Example 4: Connecting to MongoDB</h2>
          <pre>
            {`
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
                        `}
          </pre>

          <h2>Example 5: Using Socket.io for Real-time Communication</h2>
          <pre>
            {`
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
                        `}
          </pre>
        </section>

        {/* Integrate Chatbot Component */}
        <section id="chatbot">
          <Chatbot />
        </section>
        <section id="mongoose-docs">
          <MongooseDocs />
        </section>

      </main>
    </div>
  );
}

export default App;