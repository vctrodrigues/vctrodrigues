import React from "react";

import { SocialBar } from "../";

import "./styles.sass";

const Breadcrumb = ({ children }) => {
  return (
    <div className="breadcrumb">
      <span className="page">{children}</span>
      <SocialBar />
    </div>
  );
};

export default Breadcrumb;
