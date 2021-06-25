

export default function Serie (props) {
    const { item } = props

    return (
        <div className="container">
            <div className="col-xl-6">
                <div className="card b-5">
                <img src={item.images.box} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">{item.title}</h1>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}