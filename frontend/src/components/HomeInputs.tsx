import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HomeInputs(){
    const [userClientId, setUserClientId] = useState<string>('')
    const [userRedirectUri, setUserRedirectUri] = useState<string>('')
    const [userApiKey, setUserApiKey] = useState<string>('')
    const [userPermissionTemplateId, setUserPermissionTemplateId] = useState<string>('2')
    const [userExpirationDate, setUserExpirationDate] = useState<string>('')
    const navigate = useNavigate();

    function handleLoginCreation(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        navigate('/login-details', {state: {userClientId: userClientId, userRedirectUri: userRedirectUri, userPermissionTemplateId: userPermissionTemplateId, userExpirationDate: userExpirationDate}})
    }

    return (
        <form>
            <label>Enter your Client ID:</label>
            <input 
                type="text" 
                placeholder="Enter a Client ID"
                id="clientId"
                name="clientId"
                required={true}
                value={userClientId}
                onChange={(e) => setUserClientId(e.target.value)} />


            <label>Enter a Redirect URI:</label>
            <input 
                type="text" 
                placeholder="Enter a Redirect URI"
                id="redirecturi"
                name="redirecturi"
                required={true}
                value={userRedirectUri}
                onChange={(e) => setUserRedirectUri(e.target.value)} />

            <label>Enter your API Key (Optional for Vehicle Data)</label>
            <input 
                type="text" 
                placeholder="Enter a API Key"
                id="apikey"
                name="apikey"
                required={false}
                value={userApiKey}
                onChange={(e) => setUserApiKey(e.target.value)} />

            <label>Optional: Enter a permissionTemplateId (defaults to "2")</label>
            <input 
                type="number" 
                placeholder="Optional: permissionTemplateId"
                id="permissiontemplateid"
                name="permissiontemplateid"
                required={false}
                value={userPermissionTemplateId}
                onChange={(e) => setUserPermissionTemplateId(e.target.value)} />


            <label>Optional: Enter an expiration Date</label>
            <input 
                type="number" 
                placeholder="Optional: expirationDate"
                id="expirationdate"
                name="expirationdate"
                required={false}
                value={userExpirationDate}
                onChange={(e) => setUserExpirationDate(e.target.value)} />


            <button
                type="submit"
                onClick={handleLoginCreation}> Create My Link</button>
        </form>
    )
}
