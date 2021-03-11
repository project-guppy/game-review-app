import React from "react";
import { Form, Rate, Input, Button } from "antd";

const ReviewCompose = () => {
  return (
    <>
      <Form.Item>
        <Rate defaultValue={0} />
      </Form.Item>
      <Form.Item>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit Review</Button>
      </Form.Item>
    </>
  );
};

export default ReviewCompose;
