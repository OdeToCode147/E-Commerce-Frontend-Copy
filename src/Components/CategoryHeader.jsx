import React from "react";

const CategoryHeader = (props) => {
  console.log(props.image);
  return (
    <>
      <div className="headerContainer">
        <img src={props.image} alt="" className="headerImage" />
      </div>
      <div className="headerDetails">
        <h1 className="headerTitle">{props.title}</h1>
        <i className="headerDescription">{props.description}</i>
      </div>
    </>
  );
};

export default CategoryHeader;
