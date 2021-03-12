import { Card } from 'antd';
import { Rate } from 'antd';
import './Card.css';
const GuppyCard = (props) => {

  return (
    <Card className="homePageCard" style={{ width: "30vw" }} title={props.game.name}>
      <img src={props.game.cover} alt="cover" />
      <p>{props.game.genres}</p>
      <p>{props.game.involved_companies}</p>
      <p>Rating: {props.game.rating}</p>
     
      <Rate allowHalf defaultValue={3}/>
      


    </Card>
  )
}
export default GuppyCard;

