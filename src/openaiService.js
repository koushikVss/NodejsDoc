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