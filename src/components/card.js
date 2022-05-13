function Card(props){
    return(
    <>
    <div className = "card">
        <img src={props.image}></img>
        <h3>{props.title}</h3>
        <h5>{props.price}</h5>
        <p>{props.category}</p>
        <p><i>{props.descrip}</i></p>
        <button onClick={props.action}>Add to Cart</button>
    </div>
    </>
    );
}

export default Card;