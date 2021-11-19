import React, {Component}from "react";
import {MenuItems} from "./MenuItems";
import './Navbar.css'
import logo from './DLC.png'

class Navbar extends Component{
    state={clicked:false}

    handleclick=()=>{
        this.handleClick({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="Navbarlogo"> <img src={logo} alt="" className="Imgsize"/>
                
                </h1>
                <div className="menuIcons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=> {
                      return(
                         <li key={index}>
                             <a className={item.cName} href={item.URL}>
                             {item.tittle}
                             
                             
                             </a>
                        </li>
                      )
                    })}
                </ul>
            </nav>
        )
    }
}


export default Navbar;