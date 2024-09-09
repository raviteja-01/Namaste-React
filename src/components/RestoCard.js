import { CDN_URL } from "../utilis/constants";

const RestoCard = (props) => {
  const { restInfo } = props;
  const { info } = restInfo;
  const {
    name,
    avgRatingString,
    sla,
    cuisines,
    areaName,
    locality,
    cloudinaryImageId,
  } = info;
  const { slaString } = sla;
  return (
    <div className="resto-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="resto-img"
        className="resto-logo"
      />
      <div className="resto-details">
        <h3>{name}</h3>
        <div className="resto-ratings">
          <h5>{avgRatingString}</h5>
          <span>.</span>
          <h5>{slaString}</h5>
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>{`${locality},${areaName}`}</p>
      </div>
    </div>
  );
};

export default RestoCard;
