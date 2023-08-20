import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {CaretRight, CaretLeft} from "phosphor-react"

export default function Sidebar() {
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
            <div style={{height: "100%", position: "sticky", top: "0px"}}>
                <div style={{display: "flex", flexDirection: "column", alignSelf:"center", padding:"60px", }}>
                    <button className="closesidebarbutton" style={{left: "330px"}} onClick={() => {setClosed(true)}}>
                        <CaretLeft size={20} weight="bold"/>
                    </button>
                    <button className="sidebarbutton" onClick={() => {navigate("/")}}>
                        <h2>Home</h2>
                    </button>
                    <button className="sidebarbutton" onClick={() => {navigate("/about")}}>
                        <h2>About</h2>
                    </button>
                    <button className="sidebarbutton" onClick={() => {navigate("/portfolio")}}>
                        <h2>Project Portfolio</h2>
                    </button>
                    <div style={{ display: "flex", flexDirection: "column", height:"100%", marginInline:"10px"}}>
                        <button className="sidebarbutton" onClick={() => {navigate("/portfolio/professional")}}>
                            <h3>Professional</h3>
                        </button>
                        <button className="sidebarbutton" onClick={() => {navigate("/portfolio/college")}}>
                            <h3>College</h3>
                        </button>
                        <button className="sidebarbutton" onClick={() => {navigate("/portfolio/other")}}>
                            <h3>Other</h3>
                        </button>
                    </div>
                </div>
            </div>
        );
}