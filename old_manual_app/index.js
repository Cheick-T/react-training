/*function Maincontent() {     
    return (<h1> I am learning react </h1>);
};

const navbar = (
    <nav>
        <h1> My first React App </h1>
        <ul>
            <li> Princing</li>
            <li> About</li>
            <li> Contact</li>
        </ul>
    </nav>
);
ReactDOM.render (
    <div>
        
     <h1> Hello Cheick</h1>
     <Maincontent />
     {navbar}
    </div>,
     document.getElementById("root")
)*/
/*
const page = ( 
    <div>
        <header>
            <nav>
                <img src="./react-logo.png" alt="react logo" width = "40" />
            </nav>
        </header>
        
        <h1>  Fun Facts about react </h1>
        <ul>
            <li> Was first released in 2013 </li>           
            <li> Was originally created by Jordan Walke </li>
            <li> Has well over 100K stars on GitHub </li>
            <li> Is maintained by Facebook </li>
            <li> Powers thousands of enterprise apps, including mobile apps </li>
        </ul>   
        <footer>
            <small> © 2023 Cheick. All rights reserved. </small>    
        </footer>

    </div>
);*/

import Header from "./Header";
import Maincontent from "./Maincontent";
import Footer from "./Footer";



function App() {
    return ( 
    <div>
        <Header />
        
        <Maincontent />

        <Footer />

    </div>
);
}



ReactDOM.render(
    <App/>,   
    document.getElementById("root")
);

