import { useState } from "react";
import { FaStar } from "react-icons/fa";

// Example Tooltip component
const Tooltip = ({ message }) => {
  return (
    <div className="tooltip">
      {message}
    </div>
  );
};

const StarRating = ({ noOfStars = 8 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleOnEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleOnLeave = () => {
    setHover(0);  // Changed to 0 to remove hover effect completely
  };

  return (
    <div style={{ position: 'relative' }}>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <div 
            key={index} 
            style={{ display: 'inline-block', position: 'relative' }}
            onMouseEnter={() => handleOnEnter(index)}
            onMouseLeave={() => handleOnLeave()}
          >
            <FaStar
              className={`${index <= (hover || rating) ? "active" : "inactive"} star`}
              onClick={() => handleOnClick(index)}
            />
            {hover === index && (
              <Tooltip message={`Star ${index}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
