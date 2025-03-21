import {
    DimoAuthProvider,
    initializeDimoSDK, LoginWithDimo,
  } from "@dimo-network/login-with-dimo"; 
import { useLocation } from "react-router-dom";


export default function LoginConfirmation(){
    const location = useLocation();
    const {
        userClientId,
        userRedirectUri,
        userPermissionTemplateId,
        userExpirationDate
    } = location.state || {};

    initializeDimoSDK({
        clientId: userClientId,
        redirectUri: userRedirectUri,
        environment: "production",
      });

    return(
        <DimoAuthProvider>
            <div>
                <h1>Your Custom Login with DIMO Details</h1>
                <div>
                    <h3>Login with your credenitals: </h3>
                    <p>Popup Mode: </p>
                    <LoginWithDimo
                        mode="popup" />
                    <p>Redirect Mode: </p>
                    <LoginWithDimo
                        mode="redirect" />
                </div>
                <h3>Your custom login URL:</h3>
                <p>https://login.dimo.org/?clientId={userClientId}&redirectUri={userRedirectUri}&permissionTemplateId={userPermissionTemplateId}&entryState=VEHICLE_MANAGER&expirationDate={userExpirationDate} </p>
                <h3>Using the LIWD SDK: </h3>
                <p>Code Placeholder</p>
            </div>
        </DimoAuthProvider>
    )
}
