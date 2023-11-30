import React from "react";

const BredCrumb = ({ link, name, text, ...props }) => {
  return (
    <div {...props} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href={link}>{name}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {text}
        </li>
      </ol>
    </div>
  );
};

export default BredCrumb;
