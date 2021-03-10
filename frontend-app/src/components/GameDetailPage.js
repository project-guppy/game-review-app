import React from "react";

import { Card, Image, Descriptions, Rate } from "antd";

const GameDetailPage = ({ game }) => {
  return (
    <div className="gameDetailWrapper">
      <Card title={game.name}>
        <Image src={game.cover} width={200} />
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
      </Card>
    </div>
  );
};
