import "./Navbar.css"
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <div className="navbar">
            <h1>Settings</h1>
            <div className="nav">
                <div className="nav-items">
                    <a href="#">Fee Category</a>
                    <a href="#">Data Fields</a>
                    <a href="#">File upload</a>
                    <a href="#">Calender year</a>
                    <Link to="/booklist">Book List</Link>
                    <Link to="/subscribe">Subscribed Book</Link>
               </div>
               <div className="nav-icons">
               <i class="fa-solid fa-right-left"></i>
               <i class="fa-solid fa-bell"></i>
               <i class="fa-solid fa-skull"></i>
               </div>
            </div>
        </div>
    )
}