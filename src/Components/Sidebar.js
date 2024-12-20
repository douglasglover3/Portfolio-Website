import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {CaretRight, CaretLeft} from "phosphor-react"

export default function Sidebar(setNightmode) {
    const [closed, setClosed] = useState(false);
    let navigate = useNavigate();
    if(closed)
        return (
            <button className="closesidebarbutton" onClick={() => {setClosed(false)}}>
                <CaretRight size={20} weight="bold"/>
            </button>
        );
    else
    return (
        <div className="white" style={{height: "100vh", position: "sticky", top: "0px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <div style={{display: "flex", flexDirection: "column", alignSelf:"center", padding:"60px", }}>
                <button className="closesidebarbutton" style={{left: "330px"}} onClick={() => {setClosed(true)}}>
                    <CaretLeft size={20} weight="bold"/>
                </button>
                <button className="white sidebarbutton" onClick={() => {navigate("/")}}>
                    <h2>Home</h2>
                </button>
                <button className="white sidebarbutton" onClick={() => {navigate("/portfolio")}}>
                    <h2>Project Portfolio</h2>
                </button>
            </div>
        </div>
    );
}