import Navbar from "./static/Navbar";
import jwtDecode from "jwt-decode";
const Team = ({token}) => {
    
    const data = jwtDecode(token);
    console.log(data)
    return (
        <>
            <Navbar data = {data}/>
        </>
    );
}

export default Team;