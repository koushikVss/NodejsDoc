// src/openaiService.js

import axios from 'axios';

const API_KEY = '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'; // Replace with your actual OpenAI API key

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