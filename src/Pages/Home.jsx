import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import "./Home.css";
import store from "../Database/Store";

const Home = () => {
  const [randomItems, setRandomItems] = useState();


  useEffect(()=>{
    setRandomItems(store[0])
  },[])




  let randomNumber = Math.floor(Math.random() * 75);
  console.log(randomNumber);

  console.log(randomItems);
  return (
    <div>
      <Link to="/category/1006">
        <img
          src="https://live.staticflickr.com/65535/52699403047_027f8c4c69_k.jpg"
          alt=""
          width="100%"
        />
      </Link>
      <div className="HomeContent m-5">
        <h1>BestSellars</h1>
        <div className="d-flex justify-content-around flex-wrap">
          {randomItems && randomItems.items
            ? randomItems.items.slice(5, 25).map(
                (item, index) =>
                  index < 20 && (
                    <>
                      <Card
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        color={item.color}
                        category={item.category}
                        cost={item.cost}
                        originalCost={item.originalCost}
                        description={item.description}
                      />
                    </>
                  )
              )
            : ""}
        </div>
      </div>
      <Link to="/category/1001">
        <img
          className="my-3"
          src=" https://live.staticflickr.com/65535/52700415793_c0bc806ee1_k.jpg"
          alt=""
          width="100%"
        />
      </Link>
    </div>
  );
};

export default Home;
