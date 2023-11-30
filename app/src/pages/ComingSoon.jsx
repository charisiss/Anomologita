// import { useState } from "react";
import ChatBubbleLoading from "../components/ChatBubbleLoading";
import Wrapper from "../components/Layout/Wrapper";
import styles from "./ComingSoon.module.css";

export default function ComingSoon() {
  // const [loading, setLoading] = useState(true);
  return (
    <Wrapper hideHeaderMenu="true">
      <div className="flex flex-col justify-center items-start w-full h-[85vh] px-5 gap-2">
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none shadow-inner">
          <h1 className="text-lg font-extrabold text-red p-8">
            Έμαθες τα νέα;
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-tl-none shadow-inner">
          <h1 className="text-lg font-extrabold text-red p-8 text-left">
            Το πιο hot χριστουγεννιάτικο πάρτυ της πόλης είναι γεγονός
          </h1>
        </div>

        <div className="bg-red rounded-full rounded-br-none shadow-inner self-end my-5">
          <h1 className="text-lg text-right font-extrabold text-white p-8 ">
            To RedXmas Party στο WE;
          </h1>
        </div>

        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none shadow-inner">
          <h1 className="text-lg text-left font-extrabold text-red p-8">
            15/12 11:00
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-tl-none shadow-inner">
          <h1 className="text-lg text-left font-extrabold text-red p-8 ">
            Βάλε κάτι κόκκινο και ελα
          </h1>
        </div>
        <div>heyy</div>

        <div className="bg-white rounded-full rounded-br-none shadow-inner self-end my-5">
          <div className="flex flex-row gap-2 bg-white h-20 w-28 p-2 items-center justify-center rounded-full">
            <div className="w-4 h-4 rounded-full bg-red animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-red animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-red animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
        {/* <div className={styles.tail}></div> */}

        {/* <ChatBubbleLoading /> */}
      </div>
    </Wrapper>
  );
}
