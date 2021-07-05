import './css/search.css'
// import { useState } from 'react'


export default function Search () {
    
    
    // J'ai réussi à récupérer la valeur rentrée par l'utilisateur mais je n'ai pas eu le temps de la comparer au titre de ma data pour ensuite afficher le contenu recherché

    // (J'ai tous commenté pour éviter d'avoir des warning dans la console)
    /*
    const [searchTerm,setSearchTerm] = useState("")
    const handleSearchTerm = (e) => {
        let value = e.target.value
        setSearchTerm(value)
    }
    console.log(searchTerm);
    */

    return (
        <div className="search">
            
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher un titre"
            // onChange={handleSearchTerm}
            />
            <button>Rechercher</button>
        </div>
    )
}