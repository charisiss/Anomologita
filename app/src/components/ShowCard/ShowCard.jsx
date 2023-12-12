import { useState, useRef, useEffect } from "react";
import HeartIcon from "@components/HeartIcon";

const ShowCard = ({
  message,
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

  const user = Math.floor(Math.random() * 4) + 1;
  let username = "Anonymus "
  switch (user) {
    case 1:
      username += "Santa";
      break;
    case 2:
      username += "Reindeer";
      break;
    case 3:
      username += "Elf";
      break;
    case 4:
      username += "Sock";
      break;
    }

  return (
    <div
      className={`bg-${color ? color : "white"} ${
        likes == undefined ? "w-1/2" : "w-full"
      }  bg-[#f0f0f0] rounded-xl rounded-b-2xl w-full lg:w-auto h-auto flex flex-col justify-around p-5 ${customClass}`}
    >
      <div className="flex items-end justify-between">
        <div className="flex items-end gap-4">
          <img className="w-16" src={`/user-${user}.png`} />

          <div className="flex flex-col gap-0">
            <h2 className="text-black font-extrabold">{username}</h2>
            <h2 className="text-black leading-3 mb-2">redxmas.gr</h2>
          </div>
        </div>
        {likes != undefined ? (
        <div className="flex flex-col justify-center">
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

      <h2
        className={`text-lg font-extrabold text-black uppercase my-5 text-center text-${
          color ? "white" : "black"
        } uppercase`}
      >
        {message} 
      </h2>
      
    </div>
  );
};

export default ShowCard;
