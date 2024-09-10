import Search from "./Search";
import RestoCard from "./RestoCard";
import resArray from "../utilis/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resArray);
  return (
    <div className="body">
      {/* <Search /> */}
      <div className="filter-btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaraunt) => restaraunt.info.avgRating > 4.3
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfRestaurants.map((restuarant) => (
          <RestoCard key={restuarant.info.id} restInfo={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
