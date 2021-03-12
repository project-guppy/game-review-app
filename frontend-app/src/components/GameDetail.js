import React from "react";
import { Card, Image, Descriptions, Rate, List, Carousel } from "antd";
import ReviewCompose from "./ReviewCompose";
import BreadcrumbsNav from "./BreadcrumbsNav";
import Review from "./Review";

const GameDetail = ({ game, addReviewHandler, userReviewed, reviews }) => {
  console.log("game", game);
  return (
    <div className="gameDetailPageWrapper">
      <BreadcrumbsNav gameTitle={game.name} />
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
                {"release_dates" in game ? game.release_dates[0].human : null}
              </Descriptions.Item>
              <Descriptions.Item label="Genres">
                {"genres" in game ? game.genres.join(", ") : null}
              </Descriptions.Item>
            </Descriptions>
            <p>{game.summary}</p>
          </div>
        </div>
        <h3>ScreenShots</h3>
        <div className="screenshots">
          {game.screenshots.map((url) => (
            <div key={url}>
              <Image src={url} alt="" />
            </div>
          ))}
        </div>
        <h3>Reviews</h3>
        {userReviewed ? (
          <p>Thank you reviewing :-)</p>
        ) : (
          <List
            className="comment-list"
            header="Write a Review"
            itemLayout="horizontal"
            dataSource={[1]}
            renderItem={() => (
              <li>
                <ReviewCompose addReviewHandler={addReviewHandler} />
              </li>
            )}
          ></List>
        )}
        <List
          className="comment-list"
          header={`${reviews.length} reviews`}
          itemLayout="horizontal"
          dataSource={reviews.map((review) => (
            <Review key={review.asin} review={review} />
          ))}
          renderItem={(review) => <li>{review}</li>}
        ></List>
      </Card>
    </div>
  );
};

export default GameDetail;
