import { useState, useRef, useEffect } from "react";
import HeartIcon from "./HeartIcon";

const TestimonialComponent = ({ title, likeCount, color, stroke }) => {
  const [filled, setFilled] = useState(false);
  const fillTimeoutRef = useRef(null);

  const handleHeartClick = () => {
    if (fillTimeoutRef.current) {
      clearTimeout(fillTimeoutRef.current);
    }

    setFilled(true);

    fillTimeoutRef.current = setTimeout(() => {
      setFilled(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (fillTimeoutRef.current) {
        clearTimeout(fillTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`bg-${
        color ? color : "white"
      } rounded-full rounded-br-none text-start shadow-inner flex justify-between items-center border border-white z-10`}
    >
      <h2
        className={`text-lg font-extrabold text-${
          color ? "white" : "red"
        } p-8 uppercase`}
      >
        {title}
      </h2>
      <div className="flex flex-col justify-center pr-5">
        <HeartIcon filled={filled} onClick={handleHeartClick} stroke={stroke} />
        <p className={`text-${color ? "white" : "red"} text-center`}>
          {likeCount}
        </p>
      </div>
    </div>
  );
};

export default TestimonialComponent;
