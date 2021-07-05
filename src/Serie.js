import './css/serie.css'
import FavBtn from "./FavBtn"


export default function Serie (props) {
    const { item } = props

    return (
        <div className="container-page">
            <div className="card-container">
                <div className="image-container">
                    <img className="image" src={item.images.banner} alt="...."/>
                </div>
                <div className="text-container">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="info-container">
                        <div>{item.creation}</div>
                        <div>{item.seasons} Seasons</div>
                        <div><span>Distribution : </span>{item.network}</div>
                        <FavBtn id = {item.id} title = {item.title} favori ={item.user.favorited}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}