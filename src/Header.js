import './css/header.css'
import logo from './img/netflix-logo.png'
import Search from './Search'


export default function Header (props) {
    // console.log(props);
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo-container">
                    <a href="././public/index.html"><img src={logo} className="logo" alt="Logo netflix avec le x grifonné"/></a>
                </div>
            </div>
            <div className="text_and_search_container">
                <h1 className="title">Welcome on Netfli<span>x</span></h1>
                <p>Films, séries TV et bien plus en illimité.</p>
                <Search title = {props}/>
            </div>
        </div>
    )
}