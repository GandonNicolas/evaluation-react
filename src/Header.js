import './css/header.css'
import logo from './img/netflix-logo.png'
import Search from './Search'


export default function Header () {


    return (
        <div className="header-container">
            <div className="header">
                <div className="logo-container">
                    <img src={logo} className="logo" alt="Logo netflix avec le x grifonné"/>
                </div>
            </div>
            <div className="text_and_search_container">
                <h1 className="title">Welcome on Netfli<span>x</span></h1>
                <p>Films, séries TV et bien plus en illimité.</p>
                <Search />
            </div>
        </div>
    )
}