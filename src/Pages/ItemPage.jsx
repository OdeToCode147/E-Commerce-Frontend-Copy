import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemPage.css";
import store from "../Database/Store";

const ItemPage = () => {
 

  const productID = useParams().id;
  console.log(productID);
  const [itemDetails, setItemsDetails] = useState({});



  console.log(itemDetails);

  const [randomItems, setRandomItems] = useState();

  useEffect(()=>{
    setRandomItems(store[0])
  },[])

  useEffect(() => {
    if (productID && randomItems && randomItems.items) {
      setItemsDetails(randomItems.items.find((item) => item.id == productID));
    }
    window.scrollTo(0, 0);
  }, [randomItems,productID]);
  console.log(itemDetails);

  return (
    <div>
      <div className="productContainer m-5">
        <div className="ImageHolder m-5">
          <img
            className="productImage"
            width="448px"
            src={itemDetails && itemDetails.image ? itemDetails.image : ""}
            alt=""
          />
        </div>
        <div className="ProductDetails m-5">
          <h1 className="ProductName">
            {itemDetails && itemDetails.name ? itemDetails.name : ""}
          </h1>
          {itemDetails && itemDetails.originalCost ? (
            <h2>
              Original Price :{" "}
              <span style={{ textDecoration: "line-through" }}>
                {itemDetails.originalCost}
              </span>
            </h2>
          ) : (
            ""
          )}
          {itemDetails && itemDetails.cost ? (
            <h2>Our Price : {itemDetails.cost}</h2>
          ) : (
            ""
          )}
          {itemDetails && itemDetails.color ? (
            <h3>Color : {itemDetails.color}</h3>
          ) : (
            ""
          )}
          {itemDetails && itemDetails.description ? (
            <div className="aboutProduct">
              <h4>About the Product :</h4>
              {itemDetails.description}
            </div>
          ) : (
            ""
          )}
          {itemDetails && itemDetails.category && itemDetails.subCategory ? (
            <div className="mt-5">
              <span className="productCategory">{itemDetails.category} / </span>
              {itemDetails.subCategory
                ? itemDetails.subCategory.map((cat) => (
                    <div className="productSubCategory">{cat} </div>
                  ))
                : ""}
            </div>
          ) : (
            ""
          )}
          <Link style={{ textDecoration: "none" }} to={`/payment/${productID}`}>
            <div className="addToCart">Add This Item to Cart</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
