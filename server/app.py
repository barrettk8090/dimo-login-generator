from flask import Flask, jsonify
from dimo import DIMO

app = Flask(__name__)

dimo = DIMO("Production")

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/vehicles")
def vehicles():
    return jsonify(dimo.identity.count_dimo_vehicles())

if __name__ == '__main__':
    app.run(debug=True)