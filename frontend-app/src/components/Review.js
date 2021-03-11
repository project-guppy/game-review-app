import React from "react";
import { Comment, Rate } from "antd";
const Review = ({ review }) => {
  const contentComponent = (
    <ReviewContent text={review.text} rating={review.rating} />
  );
  return (
    <Comment
      author={review.username}
      avatar={review.profilePic}
      content={contentComponent}
    />
  );
};

const ReviewContent = ({ text, rating }) => {
  return (
    <>
      <Rate disabled defaultValue={rating / 20} />
      <p>{text}</p>
    </>
  );
};

export default Review;
