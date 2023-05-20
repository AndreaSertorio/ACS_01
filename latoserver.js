const express = require('express');
const openai = require('openai');

openai.apiKey = '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';

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
