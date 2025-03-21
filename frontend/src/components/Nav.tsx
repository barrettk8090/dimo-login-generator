import { useNavigate } from "react-router-dom"

export default function Nav(){
    const navigate = useNavigate();
    return(
        <div>
            <nav>
                <ul>
                    <button onClick={() => navigate("/")}>Login Generator</button>
                    <button onClick={() => navigate("/data-explorer")}>Data Explorer</button>
                </ul>
            </nav>
        </div>
    )
}