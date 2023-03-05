import React, { useState, useEffect } from "react";
import Paypal from "../Images/Paypal.svg";
import MasterCard from "../Images/master_card.svg";
import Visa from "../Images/visa.svg";
import WesternUnion from "../Images/Western_union.svg";
import FaceBook from "../Images/facebook.svg";
import Twitter from "../Images/twitter.svg";
import Shipping from "../Images/shipping.svg";
import Support from "../Images/support.svg";
import Refunds from "../Images/refund.svg";
import Card1 from "./Card1";
import "./NavbarFooter.css";

const AppFooter = () => {

  const [randomItems, setRandomItems] = useState();

  useEffect(()=>{
    fetch('https://e-commerce-backend-wq9d.onrender.com/store')
      .then(response => response.json())
      .then(json => setRandomItems(json[0]))
  },[])

  return (
    <div className="appFooter mt-5">
      <div className="appFooterTopMost mb-5">
        <div className="appFooterTopMostContent">
          <img className="Promises" src={Shipping} alt="" />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at
            sunt voluptates omnis ad dolorum dolore placeat accusamus nihil
            debitis magnam, aspernatur optio eveniet beatae.
          </div>
        </div>
        <div className="appFooterTopMostContent">
          <img className="Promises" src={Refunds} alt="" />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            molestiae nostrum rem itaque aliquam error culpa eius qui provident.
            Numquam similique vel necessitatibus perferendis rerum.
          </div>
        </div>
        <div className="appFooterTopMostContent">
          <img className="Promises" src={Support} alt="" />
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At sit
            repellat ipsum dolore commodi quis debitis doloremque hic odit eius
            consequuntur dolorum enim, itaque harum!
          </div>
        </div>
      </div>
      <div className="Featured">
        <h1>Featured Products</h1>
        <div
          id="carouselExampleCaptions"
          class="carousel carousel-dark slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <div className="container-sm carouselContainer">
                { randomItems && randomItems.items
                  ? randomItems.items
                      .slice(4, 7)
                      .map((item) => (
                        <Card1
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
                      ))
                  : ""}
              </div>
            </div>
            <div class="carousel-item ">
              <div className="container-sm carouselContainer">
                {randomItems && randomItems.items
                  ? randomItems.items
                      .slice(26, 29)
                      .map((item) => (
                        <Card1
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
                      ))
                  : ""}
              </div>
            </div>
            <div class="carousel-item ">
              <div className="container-sm carouselContainer">
                {randomItems && randomItems.items
                  ? randomItems.items
                      .slice(34, 37)
                      .map((item) => (
                        <Card1
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
                      ))
                  : ""}
              </div>
            </div>
            <div class="carousel-item">
              <div className="container-sm carouselContainer">
                { randomItems && randomItems.items
                  ? randomItems.items
                      .slice(45 , 48)
                      .map((item) => (
                        <Card1
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
                      ))
                  : ""}
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
      <div className="appFooterTop py-5">
        <div className="appFooterTopContent">
          <h3>iSHOP</h3>
          <div>
            The all-in-one commerce platform to buy quality iMobile and
            accessories.
          </div>
        </div>
        <div className="appFooterMiddleContent">
          <h3>Follow Us</h3>
          <div>
            Follow us on our social media platforms for latest products and
            updates
          </div>
          <div>
            <img className="m-3" src={FaceBook} alt="" />
            <img src={Twitter} alt="" />
          </div>
        </div>
        <div className="appFooterMiddleContent">
          <h3>Contact Us</h3>
          <div>
            iShop: address @building 124 Call us now: 0123-456-789 Email:
            support@whatever.com
          </div>
        </div>
      </div>
      <div className="appFooterMiddle py-4">
        <div className="appFooterMiddleContent">
          <div>
            <h4>Infomation</h4>
            <div>About Us </div>
            <div>Infomation </div>
            <div>Privacy Policy </div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="appFooterMiddleContent">
          <div>
            <h4>Services</h4>
            <div>About Us </div>
            <div>Infomation </div>
            <div>Privacy Policy </div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="appFooterMiddleContent">
          <div>
            <h4>Extras</h4>
            <div>About Us </div>
            <div>Infomation </div>
            <div>Privacy Policy </div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="appFooterMiddleContent">
          <div>
            <h4>My Account</h4>
            <div>About Us </div>
            <div>Infomation </div>
            <div>Privacy Policy </div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="appFooterMiddleContent">
          <div>
            <h4>Userful Links</h4>
            <div>About Us </div>
            <div>Infomation </div>
            <div>Privacy Policy </div>
            <div>Terms & Conditions</div>
          </div>
        </div>
        <div className="appFooterMiddleContent">
          <div>
            <h4>Our Offers</h4>
            <div>About Us </div>
            <div>Infomation </div>
            <div>Privacy Policy </div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>
      <div className="appFooterBottom">
        <img className="mx-1" src={Paypal} alt="" />
        <img className="mx-1" src={MasterCard} alt="" />
        <img className="mx-1" src={Visa} alt="" />
        <img className="mx-1" src={WesternUnion} alt="" />
      </div>
    </div>
  );
};

export default AppFooter;
