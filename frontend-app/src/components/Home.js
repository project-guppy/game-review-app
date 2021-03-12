import GuppyCard from "./Card";
import { useEffect, useState } from 'react';
import './Home.css'
import { Input } from 'antd';

const { Search } = Input;



const HomePage = () => {
    const [searchInput, setSearchInput] = useState()
    const [games, setGames] = useState([])
    
    useEffect(async () => {
        const data = await fetch("http://localhost:3003/api/v1/games").then((res) => res.json())
        console.log()
        setGames(data)
    }, [])
    const cards = games.map((game) => {
        return (<GuppyCard key={game.id} game={game} />
        )
    });
    
    console.log(cards)

    const onChangeHandler = (event) => {
        setSearchInput(event.target.value)
    }

    const onSearchHandler = async() => {
        const data = await fetch(`http://localhost:3003/api/v1/games?name=${searchInput}`).then((res) => res.json())
        setGames(data)

    }

    return (
        <div className="homePageWrapper">

            <div className="searchBar">
                <Search value={searchInput} onChange={onChangeHandler} placeholder="input search text" onSearch={onSearchHandler} style={{ width: 200 }} />
            </div>

            <div className="cardWrapper">
                 {cards.length!=0?cards: <p>No game found, sorry.</p>}
            </div>

        </div>
    )
}

export default HomePage;
