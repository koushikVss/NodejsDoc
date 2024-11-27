// src/openaiService.js

import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
});

export const getOpenAIResponse = async (messages) => {
    const response = await openai.post('/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: messages,
    });
    return response.data.choices[0].message.content;
};