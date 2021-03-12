import React, { useState } from "react";
import { Form, Rate, Input, Button } from "antd";

const ReviewCompose = ({ addReviewHandler }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState();
  const onClickHandler = (event) => {
    event.preventDefault();
    const newReview = {
      asin: Math.random(),
      reviewName: "UserNumber1",
      reviewText,
      overall: rating,
    };
    addReviewHandler(newReview);
  };

  return (
    <>
      <Form.Item>
        <Rate value={rating} onChange={setRating} />
      </Form.Item>
      <Form.Item>
        <Input.TextArea
          rows={4}
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onClickHandler}>
          Submit Review
        </Button>
      </Form.Item>
    </>
  );
};

export default ReviewCompose;
