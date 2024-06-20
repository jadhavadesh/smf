import { Button } from "@mui/material"
import flag from "../assets/flag.png"

export const Header = () => {
    return (
        <>
       <header class="header">
        {/* <div className="container"> */}
        <div class="logo">
            <img src={flag} alt="Car Rentals Logo" className="flag" />
            <span style={{color: "#f7af06"}}>Sahyadricha Mavala Foundation</span>
        </div>
        <nav class="nav">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">OTHER ACTITIES</a></li>
                <li><a href="#">SHORT FILM</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
        {/* </div> */}
    </header>
        </>
    )
}