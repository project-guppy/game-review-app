import React from "react";
import { Spin } from "antd";

import "./Loading.css";

const Loading = () => {
  return (
    <div class="spinContainer">
      <Spin />
    </div>
  );
};

export default Loading;
