import { useState, useRef, useEffect } from "react";
import HeartIcon from "./HeartIcon";

const TestimonialComponent = ({ title, likeCount }) => {
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
    <div className="bg-[#f0f0f0] rounded-full rounded-bl-none text-start shadow-inner flex justify-center items-center">
      <h1 className="text-lg font-extrabold text-red p-8 uppercase">{title}</h1>
      <div className="flex flex-col justify-center pr-5">
        <HeartIcon filled={filled} onClick={handleHeartClick} />
        <p className="text-red text-center">{likeCount}</p>
      </div>
    </div>
  );
};

export default TestimonialComponent;
