// src/components/Chatbot.js

import React, { useState } from 'react';
import { getOpenAIResponse } from '../openaiService';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown for rendering markdown

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = { role: 'user', content: input };
        const updatedHistory = [...chatHistory, userMessage];

        // Get AI response
        const aiResponse = await getOpenAIResponse(updatedHistory);
        setChatHistory([...updatedHistory, { role: 'assistant', content: aiResponse }]);
        setInput('');
    };

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            alert('Code copied to clipboard!');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div>
            <h1>Documentation Forum</h1>
            <div className="chat-container">
                {chatHistory.map((message, index) => (
                    <div key={index} className="message">
                        <strong>{message.role === 'user' ? 'Q:' : 'A:'}</strong> {/* Prefix for question and answer */}
                        {message.role === 'assistant' && message.content.includes('```') ? (
                            <div>
                                <ReactMarkdown>
                                    {message.content}
                                </ReactMarkdown>
                                <button onClick={() => copyToClipboard(message.content.replace(/```/g, '').trim())}>
                                    Copy Code
                                </button>
                            </div>
                        ) : (
                            <span>{message.content}</span>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                />
                <button type="submit">Ask a Question?</button>
            </form>
        </div>
    );
};

export default Chatbot;