import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/item/${props.id}`}
      >
        <div className="cardHolder">
          <div className="cardImgHolder">
            <img src={props.image} alt="" className="cardImg" />
          </div>
          <div className="cardDetailsHolder m-4">
            {props.name && props.name.length > 20 ? (
              <h3>{props.name.slice(0, 20) + "..."}</h3>
            ) : (
              <h3>{props.name}</h3>
            )}
            <h6>Color : {props.color}</h6>
            <h6>
              Original Price :{" "}
              <span style={{ textDecoration: "line-through" }}>
                {" "}
                {props.originalCost}
              </span>
            </h6>
            <h6>Our Price : {props.cost}</h6>

            <h6> Category :{props.category}</h6>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
