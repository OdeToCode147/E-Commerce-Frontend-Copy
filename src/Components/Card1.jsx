
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card1 = ({id , image , name , originalCost , cost , bagCount}) => {
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/item/${id}`}
      >
        <div className="cardHolder1">
          <div className="cardImgHolder1">
            <img src={image} alt="" className="cardImg1" />
          </div>
          <div className="cardDetailsHolder m-4">
            {name && name.length > 20 ? (
              <h3>{name.slice(0, 20) + "..."}</h3>
            ) : (
              <h3>{name}</h3>
            )}
            <h6>
              Original Price :{" "}
              <span style={{ textDecoration: "line-through" }}>
                {" "}
                {originalCost}
              </span>
            </h6>
            <h6>Our Price : {cost}</h6>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card1;
