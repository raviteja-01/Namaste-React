import Search from "./Search";
import RestoCard from "./RestoCard";
import resArray from "../utilis/mockData";
import { SWIGGY_API_URL, PROXY_URL } from "../utilis/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [restaruantsListCopy, setRestaurantsListCopy] = useState([]);

  function searchFilter(searchText) {
    console.log(restaruantsListCopy);
    const filteredList = restaruantsListCopy.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filteredList);
  }

  async function fetchData() {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const jsonData = await data.json();
      const { cards } = jsonData?.data;
      const resData =
        cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(resData);
      setRestaurantsListCopy(resData);
    } catch (err) {
      console.log("error occured in fetching Data--->", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  });

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <Search searchFilter={searchFilter} />
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
