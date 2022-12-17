import react from "react"
import './index.css';
import reactLogo from "./logo192.png"
export default function Header(){
    return(
          <nav>
            <div className="nav-logo">
                <img src={reactLogo} width="60px"/>
            </div>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </nav>
    )
}