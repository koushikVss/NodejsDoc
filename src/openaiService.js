import axios from 'axios';
import config from '../config.json'; // Adjust the path as necessary

const apicode = config.REACT_APP_OPENAI_APICODE;

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apicode}`,
    },
});

export const getOpenAIResponse = async (messages) => {
    // console.log("key ", apicode); 
    const response = await openai.post('/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: messages,
    });
    return response.data.choices[0].message.content;
};