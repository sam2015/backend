import requests
import json
from flask import Flask, request
from wit import Wit


ACCESS_TOKEN = "<fb-page-acces-token>"

WIT_TOKEN = "wit-clint-acces-token"

VERIFY_TOKEN = "fb-verify-token"

app = Flask(__name__)


@app.route('/', methods=['GET'])
def verify():
    # our endpoint echos back the 'hub.challenge' value specified when we setup the webhook
    if request.args.get("hub.mode") == "subscribe" and request.args.get("hub.challenge"):
        if not request.args.get("hub.verify_token") == VERIFY_TOKEN:
            return "Verification token mismatch", 403
        return request.args["hub.challenge"], 200

    return 'Hello World (from Flask!)', 200



def reply(user_id, msg):
    data = {
        "recipient": {"id": user_id},
        "message": {"text": msg}
             }
    resp = requests.post("https://graph.facebook.com/v2.6/me/messages?access_token=" + ACCESS_TOKEN, json=data)
    print(resp.content)




@app.route('/', methods=['POST'])
def handle_incoming_messages():
    data = request.json
    sender = data['entry'][0]['messaging'][0]['sender']['id']
    message = data['entry'][0]['messaging'][0]['message']['text']

    #client.run_actions(s)

    reply(sender, message


    return "OK"


# Setup Actions
actions = {
    'send': reply,
}

# Setup Wit Client
client = Wit(access_token=WIT_TOKEN, actions=actions)


if __name__ == '__main__':
    app.run(debug=True)
