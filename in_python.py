from flask import Flask,request
app = Flask(__name__)

@app.route('/bot')
def hello_world():
   return 'Hello '

@app.route('/',methods=['POST'])
def bot_hello():
	if(request.method=="POST"):
		print(request.json)
		return "ok"
	else:
		return "hello"

if __name__ == '__main__':
   app.run(debug=True) 