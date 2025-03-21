export default function HomeFAQ(){
    return(
        <div>
            <h1> FAQ </h1>

            <h3>Where can I get a Client ID and Redirect URI?</h3>
            <p>First create an account in the DIMO Developer Console and then create an app.</p>

            <h3>What are the different permissionTemplateId's? Whats the difference?</h3>
            <p>permissionTemplateId=1 is all vehicle data</p>
            <p>permissionTemplateId=2 is all vehicle data EXCEPT for issuing vehicle commands</p>
        </div>
    )
}