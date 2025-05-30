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

@app.route("/vehicle/<token_id>")
def vehicle_signals(token_id):
    return jsonify(dimo.telemetry.available_signals(vehicle_jwt=vehicle_jwt, token_id=token_id))

@app.route("/vehicle/signalsLatest/<token_id>/")
def vehicle_signals_latest(token_id):
    return jsonify(dimo.telemetry.get_signals_latest(vehicle_jwt=vehicle_jwt, token_id=token_id))

@app.route("/devLicenseInfo/clientId=<client_id>/redirectUri=<redirect_uri>/")
def dev_license_info(client_id, redirect_uri, api_key):
    devLicenseInfo = {
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "api_key": api_key
    }
    return jsonify(devLicenseInfo)
    
if __name__ == '__main__':
    app.run(debug=True)