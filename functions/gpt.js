const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors');

exports.chatWithOpenAI = functions.https.onRequest((request, response) => {
    cors()(request, response, async () => {
        const chatMessages = request.body.messages;

        try {
            const result = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: chatMessages
            }, {
                headers: {
                    'Authorization': `Bearer ${functions.config().openai.key}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log(result.data);
            response.send(result.data);
        } catch (error) {
            response.status(500).send(error);
        }
    });
});
