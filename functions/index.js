const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors');

const corsOptions = {
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (origin === 'https://radiology101.it' || origin === 'http://127.0.0.1:5500') {
            return callback(null, true)
        } else {
            return callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

const corsMiddleware = cors(corsOptions);

exports.chatWithOpenAI = functions.region('europe-west1').https.onRequest((request, response) => {
    corsMiddleware(request, response, async () => {
        const { model, temperature, messages: chatMessages } = request.body;

        try {
            const result = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: model,
                temperature: temperature,
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
