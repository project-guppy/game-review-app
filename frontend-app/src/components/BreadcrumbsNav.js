import React from "react";
const { Breadcrumb } = require("antd");

const BreadcrumbsNav = ({ gameTitle }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{gameTitle}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbsNav;
