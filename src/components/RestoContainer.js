import RestoCard from "./RestoCard";
import resArray from "../utilis/mockData";

const RestoContainer = () => {
  return (
    <div className="resto-container">
      {resArray.map((restuarant) => (
        <RestoCard key={restuarant.info.id} restInfo={restuarant} />
      ))}
    </div>
  );
};

export default RestoContainer;
