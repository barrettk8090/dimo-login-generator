import HomeInputs from "./HomeInputs"
import HomeFAQ from "./HomeFAQ"
import Nav from "./Nav"
export default function Home(){
    return(
        <>
        <Nav/>
        <div>
            <h1> Dimo Login Generator </h1>
            <h3>Use your credentials from the DIMO Developer Console to create a custom login link and experiment with privileged vehicle data.</h3>
        </div>
        <HomeInputs />
        <HomeFAQ />
      </>
    )
}