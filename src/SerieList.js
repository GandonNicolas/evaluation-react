import React from 'react'
import Serie from './Serie'


export default function SerieList (props) {

    const serieList = props.serieList.map(item => <Serie key={item.id} item={item} />)

    return (
        <div>
            {serieList}
        </div>
    )
}