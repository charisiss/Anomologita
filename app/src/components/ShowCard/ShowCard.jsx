import { useState, useRef, useEffect } from "react";
import HeartIcon from "@components/HeartIcon";

const ShowCard = ({
  message,
  likeCount,
  color,
  stroke,
  onLike,
  customClass,
  messageId,
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
  let user = 1;
  let icon = 1;
  if (messageId != undefined) user = messageId % 10;

  let username = "Anonymous ";

  switch (user) {
    case 0:
    case 1:
    case 5:
      username += "Santa";
      icon = "1";
      break;
    case 2:
    case 6:
    case 7:
      username += "Reindeer";
      icon = "2";
      break;
    case 3:
    case 8:
      username += "Elf";
      icon = "3";
      break;
    case 4:
    case 9:
      username += "Sock";
      icon = "4";
      break;
  }

  return (
    <div
      className={`bg-${color ? color : "white"} ${
        likes == undefined ? "w-1/2" : "w-full"
      }  flex h-full flex-col justify-around rounded-xl rounded-b-2xl bg-[#f0f0f0] p-5 lg:w-auto ${customClass}`}
    >
      <div className="flex items-end justify-between">
        <div className="flex items-end gap-4">
          <img className="w-20" src={`/user-${icon}.png`} />

          <div className="flex flex-col gap-0">
            <h2 className="text-3xl font-extrabold text-black">{username}</h2>
            <h2 className="mb-2 text-3xl leading-3 text-black">redxmas.gr</h2>
          </div>
        </div>
        {likes != undefined ? (
          <div className="flex flex-col justify-center">
            <HeartIcon
              filled={filled}
              onClick={handleHeartClick}
              stroke={stroke}
            />
            <p
              className={`text-${
                color ? "white" : "red"
              } select-none text-center text-3xl`}
            >
              {likes}
            </p>
          </div>
        ) : null}
      </div>

      <h2
        className={`my-5 text-center text-4xl font-extrabold uppercase text-black text-${
          color ? "white" : "black"
        } uppercase`}
      >
        {message}
      </h2>
    </div>
  );
};

export default ShowCard;
