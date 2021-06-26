import './css/serie.css'
import LikeBtn from "./LikeBtn";

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
                        <LikeBtn />
                    </div>
                </div>
            </div> 
        </div>
    )
}