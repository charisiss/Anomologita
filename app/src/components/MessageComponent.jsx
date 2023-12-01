import { useState, useRef, useEffect } from "react";
import HeartIcon from "./HeartIcon";

const MessageComponent = ({
  title,
  likeCount,
  color,
  stroke,
  onLike,
  customClass,
}) => {
  const [likes, setLikes] = useState(likeCount);
  const [filled, setFilled] = useState(false);
  const fillTimeoutRef = useRef(null);

  const handleHeartClick = () => {
    if (fillTimeoutRef.current) {
      clearTimeout(fillTimeoutRef.current);
    }

    setFilled(true);
    setLikes((prevLikes) => prevLikes + 1); // Increment likes state
    onLike(); // Call function to update Firestore

    fillTimeoutRef.current = setTimeout(() => {
      setFilled(false);
    }, 500);
  };

    // Effect to update local like count when the prop changes
    useEffect(() => {
      setLikes(likeCount);
    }, [likeCount]);

  useEffect(() => {
    return () => {
      if (fillTimeoutRef.current) {
        clearTimeout(fillTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`bg-${color ? color : "white"} ${
        likes == undefined ? "w-1/2" : "w-full"
      }  rounded-full rounded-bl-none text-start shadow-inner flex justify-between items-center border border-white ${customClass}`}
    >
      <h2
        className={`text-lg font-extrabold text-${
          color ? "white" : "red"
        } p-8 uppercase`}
      >
        {title}
      </h2>
      {likes != undefined ? (
        <div className="flex flex-col justify-center pr-5 mb-[-18px]">
          <HeartIcon
            filled={filled}
            onClick={handleHeartClick}
            stroke={stroke}
          />
          <p className={`text-${color ? "white" : "red"} text-center`}>
            {likes}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default MessageComponent;
