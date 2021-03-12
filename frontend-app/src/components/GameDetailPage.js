import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameDetail from "./GameDetail";

import "./GameDetailPage.css";

const GameDetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState();
  const [isReviewedByUser, setIsReviewedByUser] = useState(false);

  const addReview = (reviewObj) => {
    setReviews([...reviews, reviewObj]);
    setIsReviewedByUser(true);
  };

  useEffect(() => {
    const updateReviews = async () => {
      await fetch(`http://localhost:3003/api/v1/games/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([reviews]),
      });
    };
    console.log("review");
    if (!isLoading) updateReviews();
  }, [reviews]);

  useEffect(() => {
    setIsLoading(true);
    const fetchGame = async () => {
      const gameObj = await fetch(
        `http://localhost:3003/api/v1/games?id=${id}`
      ).then((res) => res.json());
      console.log("here", gameObj[0]);
      setGame(gameObj[0]);
      setReviews(gameObj[0].reviews);
      setIsLoading(false);
    };
    console.log("fetching");
    fetchGame();
  }, [isReviewedByUser]);

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <GameDetail
          game={game}
          addReviewHandler={addReview}
          userReviewed={isReviewedByUser}
        />
      )}
    </>
  );
};

export default GameDetailPage;
