//import indexImage from "./index.jpeg"
import './../App.css';
function Card(props){
    return(
    <div className="mainCard">
    <div className="card">
        <div className="image">
            <img src={require("./../assets/"+props.imagefile)} alt="" />
        </div>
        <div className="pos">
            {props.pos}
        </div>
        <div className="name">
            {props.name}
        </div>
        <div className="desc">
            {props.desc}
        </div>
    </div>
    </div>
    )
}

export default Card;