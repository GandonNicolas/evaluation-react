import SerieList from './SerieList'
import React, { useState, useEffect } from 'react';
import Header from './Header'

export default function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/rest/shows')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
  
    // console.log(data);

    return (
        <div>
            <Header title = { data}/>
            <SerieList serieList = { data } />
        </div>
    )
}
