import { Card } from 'antd';
import './Card.css';
const GuppyCard = (props) => {

  return (
    <Card style={{ width: "300px" }} title={props.game.name}>
      <img src={props.game.cover} alt="cover" />
      <p>{props.game.genres}</p>
      <p>{props.game.involved_companies}</p>

    </Card>
  )
}
export default GuppyCard;