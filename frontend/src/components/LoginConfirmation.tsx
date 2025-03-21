import {
    DimoAuthProvider,
    initializeDimoSDK, LoginWithDimo,
  } from "@dimo-network/login-with-dimo"; 


export default function LoginConfirmation(){
    initializeDimoSDK({
        clientId: "userClientId",
        redirectUri: "userRedirectUri",
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
                <p>https://login.dimo.org/?clientId=CLIENTIDHERE&redirectUri=REDIRECTURIHERE&permissionTemplateId=TEMPLATEIDHERE&entryState=VEHICLE_MANAGER&expirationDate=EXPIRATIONOPTIONALHERE </p>
                <h3>Using the LIWD SDK: </h3>
                <p>Code Placeholder</p>
            </div>
        </DimoAuthProvider>
    )
}
