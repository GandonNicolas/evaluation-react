import './css/search.css'
import { useState } from 'react'


export default function Search () {
    

    const [searchTerm,setSearchTerm] = useState("")
    const handleSearchTerm = (e) => {
        let value = e.target.value
        setSearchTerm(value)
    }
    console.log(searchTerm);


    return (
        <div className="search">
            
            <input 
            type="text" 
            name="searchBar" 
            id="searchBar" 
            placeholder="Rechercher un titre"
            onChange={handleSearchTerm}
            />
            <button>Rechercher</button>
        </div>
    )
}