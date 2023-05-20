const express = require('express');
require('dotenv').config();

const openai = require('openai');

openai.apiKey = process.env.OPENAI_API_KEY;


const app = express();
app.use(express.json());

app.post('/get-gpt-3-response', async (req, res) => {
    const prompt = req.body.text;
    const response = await openai.Completion.create({
        engine: 'text-davinci-002',
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.5,
    });
    res.json({ response: response.choices[0].text.strip() });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
