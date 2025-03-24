from flask import Flask, jsonify
from dimo import DIMO
import os

app = Flask(__name__)

dimo = DIMO("Production")

auth_header = dimo.auth.get_dev_jwt(
            client_id=os.getenv("DIMO_CLIENT_ID"),
            domain=os.getenv("DIMO_DOMAIN"),
            private_key=os.getenv("DIMO_API_KEY")
)
dev_jwt = auth_header["access_token"]

vehicle_jwt_req = dimo.token_exchange.exchange(developer_jwt=dev_jwt, token_id=17)
vehicle_jwt = vehicle_jwt_req["token"]

@app.route("/vehicles")
def vehicles():
    return jsonify(dimo.identity.count_dimo_vehicles())

@app.route("/vehicle/17")
def vehicle():
    return jsonify(dimo.telemetry.available_signals(vehicle_jwt=vehicle_jwt, token_id=17))
    
if __name__ == '__main__':
    app.run(debug=True)