import GuppyCard from "./Card";
import { useEffect, useState } from "react";
import "./Home.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const { Search } = Input;

const HomePage = () => {
  const [searchInput, setSearchInput] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(async () => {
    const data = await fetch("http://localhost:3003/api/v1/games").then((res) =>
      res.json()
    );
    console.log();
    setGames(data);
    setIsLoading(false);
  }, []);
  const cards = games.map((game) => {
    return (
      <Link to={`/game/${game.id}`}>
        <GuppyCard key={game.id} game={game} />
      </Link>
    );
  });

  console.log(cards);

  const onChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const onSearchHandler = async () => {
    const data = await fetch(
      `http://localhost:3003/api/v1/games?name=${searchInput}`
    ).then((res) => res.json());
    setGames(data);
  };

  return (
    <div className="homePageWrapper">
      <div className="searchBar">
        <Search
          value={searchInput}
          onChange={onChangeHandler}
          placeholder="input search text"
          onSearch={onSearchHandler}
          style={{ width: 200 }}
        />
      </div>

      <div className="cardWrapper">
        {isLoading ? (
          <Loading />
        ) : cards.length != 0 ? (
          cards
        ) : (
          <p>No games found, try again please</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
