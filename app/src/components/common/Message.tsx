import React from "react";
import { classNames } from "./HelperFunctions";

interface MessageProps {
  type: "send" | "receive";
  isItLoading?: boolean;
  tail: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Message = ({
  type,
  tail = false,
  isItLoading = false,
  children,
  className = "",
}: MessageProps) => {
  const leftOrRight = type === "send" ? "right" : "left";
  const bgColor = type === "send" ? "bg-red" : "bg-white";
  const oppositeBgColor = type !== "send" ? "bg-red" : "bg-white";
  return (
    <div
      className={classNames(
        type === "send" ? "self-end " : " text-red",
        `${bgColor} relative z-10 flex items-center justify-between rounded-full px-8 py-6 font-extrabold`,
      )}
    >
      {isItLoading ? (
        <div className="flex flex-row items-center justify-center gap-2 rounded-full">
          <div
            className={`h-4 w-4 animate-bounce rounded-full ${oppositeBgColor}`}
          ></div>
          <div
            className={`h-4 w-4 animate-bounce rounded-full ${oppositeBgColor} [animation-delay:-.3s]`}
          ></div>
          <div
            className={`h-4 w-4 animate-bounce rounded-full ${oppositeBgColor} [animation-delay:-.5s]`}
          ></div>
        </div>
      ) : (
        <span className="z-10 w-full">{children}</span>
      )}

      {/* <span
        className={`tail h-25 w-25 absolute bottom-2 ${leftOrRight}-0 rounded-full ${bgColor}`}
      >
        <span
          className={`absolute bottom-[-8px] ${leftOrRight}-[-2px] h-4 w-4 rounded-full ${bgColor}`}
        ></span>
        <span
          className={`absolute bottom-[-16px] ${leftOrRight}-[-10px] h-2 w-2 rounded-full ${bgColor}`}
        ></span>
      </span> */}
      {type === "send" && tail && (
        <span
          className={`tail h-25 w-25 absolute bottom-2 right-0 rounded-full ${bgColor}`}
        >
          <span
            className={`absolute bottom-[5px] right-[10px] h-6 w-6 rounded-full ${bgColor}`}
          ></span>
          <span
            className={`absolute bottom-[-8px] right-[-2px] h-4 w-4 rounded-full ${bgColor}`}
          ></span>
          <span
            className={`absolute bottom-[-16px] right-[-10px] h-2 w-2 rounded-full ${bgColor}`}
          ></span>
        </span>
      )}
      {type === "receive" && tail && (
        <span
          className={`tail h-25 w-25 absolute bottom-2 left-0 rounded-full ${bgColor}`}
        >
          <span
            className={`absolute bottom-[5px] left-[10px] h-6 w-6 rounded-full ${bgColor}`}
          ></span>
          <span
            className={`absolute bottom-[-8px] left-[-2px] h-4 w-4 rounded-full ${bgColor}`}
          ></span>
          <span
            className={`absolute bottom-[-16px] left-[-10px] h-2 w-2 rounded-full ${bgColor}`}
          ></span>
        </span>
      )}
    </div>
  );
};

export default Message;
