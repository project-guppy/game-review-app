import GuppyCard from "./Card";
import { useEffect, useState } from 'react';
import './Home.css'



const HomePage = () => {
    
    const [games, setGames] = useState([])
    useEffect(async() => {
        const data = await fetch("http://localhost:3003/api/v1/games").then((res) =>res.json() )
        console.log()
        setGames(data)
    }, [])
    const cards = games.map((game) => {
        return (<GuppyCard key={game.id} game={ game } />
        )
    });
    console.log(cards)

    return (
 
        <div className="cardWrapper">
            {cards}
        </div>
    )
}
export default HomePage;
