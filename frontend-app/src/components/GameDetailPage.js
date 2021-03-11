import React from "react";

import { Card, Image, Descriptions, Rate, List } from "antd";

import "./GameDetailPage.css";
import Review from "./Review";
import ReviewCompose from "./ReviewCompose";

const GameDetailPage = ({ game }) => {
  const reviews = game.reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return (
    <div className="gameDetailPageWrapper">
      <Card className>
        <div className="gameDetailWrapper">
          <div className="gameDetailSide">
            <Image src={game.cover} width={200} />
          </div>
          <div className="gameDetailContent">
            <h1>{game.name}</h1>
            <Rate disabled defaultValue={game.rating / 20} />
            <Descriptions>
              <Descriptions.Item label="Release Date">
                {game.release_dates[0].human}
              </Descriptions.Item>
              <Descriptions.Item label="Genres">
                {game.genres.join(", ")}
              </Descriptions.Item>
            </Descriptions>
            <p>{game.summary}</p>
          </div>
        </div>
        <List
          className="comment-list"
          header="Write a Review"
          itemLayout="horizontal"
          dataSource={[1]}
          renderItem={() => (
            <li>
              <ReviewCompose />
            </li>
          )}
        ></List>
        <List
          className="comment-list"
          header={`${reviews.length} reviews`}
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={(review) => <li>{review}</li>}
        ></List>
      </Card>
    </div>
  );
};

export default GameDetailPage;
