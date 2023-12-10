import { useState, useRef, useEffect } from "react";
import HeartIcon from "./HeartIcon";
import React from "react";
import Message from "./common/Message";

const MessagesComponent = ({
  type,
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

  useEffect(() => {
    return () => {
      if (fillTimeoutRef.current) {
        clearTimeout(fillTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Message
      type={type}
      tail={true}
      className={`${
        likes == undefined ? "w-1/2" : "w-full"
      }  flex items-center justify-between rounded-full rounded-bl-none border border-white text-start shadow-inner ${customClass}`}
    >
      <div className="flex justify-between gap-2">
        <span className={`text-lg font-extrabold uppercase`}>{title}</span>
        {likes != undefined ? (
          <div className=" flex flex-col justify-center">
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
    </Message>
  );
};

export default MessagesComponent;
