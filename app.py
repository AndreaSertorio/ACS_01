from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

@app.route('/api/completion', methods=['POST'])
def completion():
    data = request.get_json()
    openai.api_key = 'your-api-key'
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=data['prompt'],
        max_tokens=100
    )
    return jsonify(response.choices[0].text.strip())

if __name__ == '__main__':
    app.run(port=5000, debug=True)
