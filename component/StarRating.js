import StarRatingStyle from "../styles/StarRating.module.css";

const StarRating = ({ rate }) => {
  return (
    <div className={StarRatingStyle.starRating}>
      {[...Array(5)].map((star, index) => {
        return (
          <span
            key={index}
            className={`${StarRatingStyle.star} ${
              index + 1 <= Math.floor(rate) ? StarRatingStyle.activeStar : ""
            }`}
          >
            &#9733;
          </span>
        );
      })}
      <span className={StarRatingStyle.rate}>({rate})</span>
    </div>
  );
};
export default StarRating;
