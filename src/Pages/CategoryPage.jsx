import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import CategoryHeader from "../Components/CategoryHeader";

const CategoryPage = () => {
  const CategoryID = useParams().id;
  console.log(CategoryID);
  const [categoryDetails, setCategoryDetails] = useState({});

  const [randomItems, setRandomItems] = useState();

  useEffect(()=>{
    fetch("https://e-commerce-backend-wq9d.onrender.com/alldata")
    .then((response) => response.json())
    .then((json) => setRandomItems(json));
  }, [CategoryID])

  useEffect(() => {
    if (randomItems && CategoryID) {
      setCategoryDetails(
        randomItems
          .filter((element) => element.sectionID == CategoryID)
          .map((item) => item)[0]
      );
      window.scrollTo(0, 0);
    }
  }, [randomItems, CategoryID]);
  console.log(categoryDetails);

  console.log(categoryDetails);

  return (
    <div>
      {categoryDetails &&
      categoryDetails.header &&
      categoryDetails.header.image &&
      categoryDetails.header.title &&
      categoryDetails.header.description ? (
        <CategoryHeader
          image={categoryDetails.header.image}
          title={categoryDetails.header.title}
          description={categoryDetails.header.description}
        />
      ) : (
        ""
      )}
      <div className="d-flex justify-content-around flex-wrap">
        {categoryDetails && categoryDetails.items
          ? categoryDetails.items.map((item) => (
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
  );
};

export default CategoryPage;
