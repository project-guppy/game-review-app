import React from "react";
import { Comment, Rate } from "antd";
const Review = ({ review }) => {
  const contentComponent = (
    <ReviewContent text={review.reviewText} rating={review.overall} />
  );
  return (
    <Comment
      author={review.reviewerName}
      avatar={review.profilePic}
      content={contentComponent}
    />
  );
};

const ReviewContent = ({ text, rating }) => {
  return (
    <>
      <Rate disabled defaultValue={rating} />
      <p>{text}</p>
    </>
  );
};

export default Review;
