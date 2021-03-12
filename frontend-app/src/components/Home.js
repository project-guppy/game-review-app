import GuppyCard from "./Card";
import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const getGames = async () => {
      const data = await fetch(
        "http://localhost:3003/api/v1/games"
      ).then((res) => res.json());
      console.log();
      setGames(data);
    };
    getGames();
  }, []);

  const cards = games.map((game) => {
    return (
      <Link to={`/game/${game.id}`}>
        <GuppyCard key={game.id} game={game} />
      </Link>
    );
  });
  console.log(cards);

  return <div className="cardWrapper">{cards}</div>;
};
export default HomePage;
