import { useState, useRef, useEffect } from "react";

const HeartIcon = ({ filled, onClick, stroke }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const fadeOutRef = useRef(null);

  useEffect(() => {
    if (fadeOutRef.current) {
      clearTimeout(fadeOutRef.current);
    }

    if (filled) {
      // Set fade-out after 2 seconds (adjust as needed)
      fadeOutRef.current = setTimeout(() => {
        setFadeOut(true);
      }, 2000);
    }

    return () => {
      if (fadeOutRef.current) {
        clearTimeout(fadeOutRef.current);
      }
    };
  }, [filled]);

  return (
    <div
      className={`cursor-pointer ${fadeOut ? "fade-out" : ""}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 47.5 47.5"
        fill={filled ? "#900009" : "none"}
        stroke={stroke ? stroke : "#900009"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
      >
        <defs>
          <clipPath id="a">
            <path d="M0 38h38V0H0v38Z"></path>
          </clipPath>
        </defs>
        <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
          <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241"></path>
        </g>
      </svg>
    </div>
  );
};

export default HeartIcon;
