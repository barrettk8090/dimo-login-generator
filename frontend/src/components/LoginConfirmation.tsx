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
                <h3>Using the DIMO Login React Component SDK: </h3>
                <p>To use the Login with DIMO React Component SDK, first install:</p>
                <p>npm install npm i @dimo-network/login-with-dimo</p>
                <p>Then, import the components:</p>
                <pre>
                    {`import { initializeDimoSDK } from "@dimo-network/login-with-dimo";
                        initializeDimoSDK({
                            clientId: ${userClientId},
                            redirectUri: ${userRedirectUri},
                            apiKey: "YOUR API KEY",
                            environment: "development" | "production",
                        });`}
                </pre>
            </div>
        </DimoAuthProvider>
    )
}
