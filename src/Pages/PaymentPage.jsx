import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = ({ response, setResponse }) => {
  const productID = useParams().id;
  console.log(productID);
  const [itemDetails, setItemsDetails] = useState({});
  
  // const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  console.log(itemDetails);

  const [randomItems, setRandomItems] = useState();


  useEffect(()=>{
    fetch("https://e-commerce-backend-wq9d.onrender.com/store")
      .then((response) => response.json())
      .then((json) => setRandomItems(json[0]));
  },[])

  console.log(randomItems);

  useEffect(() => {
    if (productID && randomItems && randomItems.items) {
      setItemsDetails(randomItems.items.find((item) => item.id == productID));
    }
    setTotal(response * itemDetails.cost);
    window.scrollTo(0, 0);
  }, [randomItems,productID , response]);
  console.log(itemDetails);



  return (
    <div className="PaymentContainer">
      {itemDetails && itemDetails.image ? (
        <div className="ProductHolder">
          <img
            src={itemDetails && itemDetails.image ? itemDetails.image : ""}
            alt=""
            width="200px"
          />
          {itemDetails && itemDetails.name && itemDetails.color ? (
            <h2 className="ProductName">
              {itemDetails.name} ({itemDetails.color})
            </h2>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <div className="QuantityHolder">
        <div>
          <h3 className="QuantityHeader">Quantity</h3>
          <button
            className="btn btn-danger"
            onClick={() => {if(response>0){setResponse(response - 1)}}}
          >
            -
          </button>
          <h2 className="itemCount"> {response}</h2>
          <button
            className="btn btn-success"
            onClick={() => setResponse(response + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="CartValue">
        <h3>Total Cart Value</h3>
        {typeof total === "number" ? (
          <h2 className="FinalValue">{total}</h2>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
