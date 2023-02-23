import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "../Components/Card.css";
import CategoryHeader from "../Components/CategoryHeader";
import "./Store.css";
import store from "../Database/Store";

const Store = () => {
  const [price, setPrice] = useState();
  console.log(price);

  const [randomItems, setRandomItems] = useState();

  useEffect(() => {
    setRandomItems(store[0]);
  }, []);

  console.log(randomItems);

  return (
    <>
      {randomItems &&
      randomItems.header &&
      randomItems.header.image &&
      randomItems.header.title &&
      randomItems.header.description ? (
        <CategoryHeader
          image={randomItems.header.image}
          title={randomItems.header.title}
          description={randomItems.header.description}
        />
      ) : (
        ""
      )}
      <div className="StoreMiddleContainer">
        <div className="StoreNavBar">
          <h1 className="my-4">Filter Content</h1>
          <div>
            <h3>Accessories</h3>
            <table>
              <tr>
                <th>Airpods</th>
                <td>16</td>
              </tr>
              <tr>
                <th>Headphones and Airpods</th>
                <td>28</td>
              </tr>
              <tr>
                <th>Mice and Keyboards</th>
                <td>15</td>
              </tr>
              <tr>
                <th>Covers</th>
                <td>5</td>
              </tr>
              <tr>
                <th>Charger</th>
                <td>4</td>
              </tr>
              <tr>
                <th>Rain Gauge</th>
                <td>1</td>
              </tr>
              <tr>
                <th>TV</th>
                <td>3</td>
              </tr>
              <tr>
                <th>HomePods</th>
                <td>7</td>
              </tr>
              <tr>
                <th>Smart Watch</th>
                <td>18</td>
              </tr>
              <tr>
                <th>iPhone</th>
                <td>38</td>
              </tr>
              <tr>
                <th>iPhone 14</th>
                <td>16</td>
              </tr>
              <tr>
                <th>iPhone Plus</th>
                <td>4</td>
              </tr>
              <tr>
                <th>iPhone Pro</th>
                <td>6</td>
              </tr>
              <tr>
                <th>iPhone Pro Max</th>
                <td>2</td>
              </tr>
              <tr>
                <th>iPhone 13</th>
                <td>4</td>
              </tr>
              <tr>
                <th>iPhone 12</th>
                <td>5</td>
              </tr>
              <tr>
                <th>iPhone SE</th>
                <td>3</td>
              </tr>
              <tr>
                <th>MacBook</th>
                <td>16</td>
              </tr>
              <tr>
                <th>MacBook Air</th>
                <td>6</td>
              </tr>
              <tr>
                <th>MacBook Pro</th>
                <td>4</td>
              </tr>
              <tr>
                <th>iMac</th>
                <td>4</td>
              </tr>
              <tr>
                <th>iMac Mini</th>
                <td>2</td>
              </tr>
              <tr>
                <th>iPad</th>
                <td>15</td>
              </tr>
              <tr>
                <th>iPad Pro</th>
                <td>2</td>
              </tr>
              <tr>
                <th>iPad Air</th>
                <td>4</td>
              </tr>
              <tr>
                <th>iPad 10th Gen</th>
                <td>3</td>
              </tr>
              <tr>
                <th>iPad 9th Gen</th>
                <td>2</td>
              </tr>
              <tr>
                <th>iPad Mini</th>
                <td>4</td>
              </tr>
            </table>
            <h3 className="my-4">Price</h3>
            <div class="slidecontainer">
              <input
                type="range"
                min="3000"
                onChange={(e) => setPrice(e.target.value)}
                max="500000"
                class="slider"
                id="myRange"
              />
              <div>The Selected Price Range is</div>
              <div>0 - {price}</div>
            </div>
            <h3 className="my-4">Colour</h3>
            <div className="coloor whiteColoor"></div>
            <div className="coloor blackColoor"></div>
            <div className="coloor redColoor"></div>
            <div className="coloor greenColoor"></div>
            <div className="coloor blueColoor"></div>
            <div className="more">MORE</div>
          </div>
        </div>
        <div className="d-flex justify-center flex-wrap cardBox">
          {randomItems && randomItems.items
            ? randomItems.items.map((item) => (
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
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default Store;
