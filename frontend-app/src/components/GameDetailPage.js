import React from "react";

import { Card, Image, Descriptions, Rate } from "antd";

import "./GameDetailPage.css";

const GameDetailPage = ({ game }) => {
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
      </Card>
    </div>
  );
};

export default GameDetailPage;
