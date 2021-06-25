import './App.css';
import SerieList from './SerieList'
import React, { useState, useEffect } from 'react';

export default function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/rest/shows')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
  
    console.log(data);

    return (
        <div>
            <SerieList serieList = { data } />
        </div>
    )
}
