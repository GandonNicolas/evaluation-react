import { useState } from 'react';
import './css/FavBtn.css'
import classNames from 'classnames'


export default function FavBtn (props) {
    
    let titleShow = props.title
    let id = props.id
    let favo = props.favori
    // console.log(favo);

    
    const [addFav, setAddFav] = useState(favo)
    // console.log(addFav)
    
    function onButtonClick() {
        fetch(`http://localhost:4000/rest/shows/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              title: titleShow,
              user: { favorited: !addFav } })
          })
            .then(response => response.json())
            .then(setAddFav(!addFav))
    }
    return (
        <>
        <div onClick={onButtonClick} className={classNames({ 'no-fav': !addFav, 'fav': addFav})}>
            <svg width="25" height="25" stroke="yellow" fill="currentColor" viewBox="0 -2 16 20">
            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>      
      </div>
      
    </>
    )
}