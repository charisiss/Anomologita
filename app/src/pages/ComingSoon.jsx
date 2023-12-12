// import { useState } from "react";
import ChatBubbleLoading from "../components/ChatBubbleLoading";
import Wrapper from "../components/Layout/Wrapper";
import Message from "../components/common/Message";
import styles from "./ComingSoon.module.css";

export default function ComingSoon() {
  // const [loading, setLoading] = useState(true);
  return (
    <Wrapper hideHeaderMenu="true">
      <div className="flex w-full flex-col items-start justify-center gap-2 px-5">
        <Message type={"receive"} tail={false}>
          Έμαθες τα νέα;
        </Message>
        <Message type={"receive"} tail={true}>
          Το πιο hot Χριστουγεννιάτικο πάρτυ της πόλης είναι γεγονός
        </Message>
        <Message type={"send"} tail={true}>
          To RedXmas Party στο WE;
        </Message>
        <div className="rounded-full rounded-bl-none bg-[#f0f0f0] shadow-inner">
          <h1 className="p-8 text-lg font-extrabold text-red">
            Έμαθες τα νέα;
          </h1>
        </div>
        <div className="rounded-full rounded-tl-none bg-[#f0f0f0] shadow-inner">
          <h1 className="p-8 text-left text-lg font-extrabold text-red">
            Το πιο hot Χριστουγεννιάτικο πάρτυ της πόλης είναι γεγονός
          </h1>
        </div>
        <div className="my-5 self-end rounded-full rounded-br-none bg-red shadow-inner">
          <h1 className="p-8 text-right text-lg font-extrabold text-white ">
            To RedXmas Party στο WE;
          </h1>
        </div>{" "}
        {/* /////////////////////////////////////////////////////////////////////////////// */}
        {/* <span className="relative">
          <span className="chat-bubble w-46 absolute left-1/2 top-1/2 h-72 -translate-x-1/2 -translate-y-1/2 transform bg-gray-300">
            <span className="absolute left--36 h-72 w-72 rounded-full border-2 border-gray-300 bg-gray-300"></span>
            <span className="absolute right--36 h-72 w-72 rounded-full border-2 border-gray-300 bg-gray-300"></span>
            <span className="tail h-25 w-25 absolute bottom-2 left--40 rounded-full bg-gray-300">
              <span className="absolute bottom--8 left--10 h-12 w-12 rounded-full bg-gray-300"></span>
            </span>
            <span className="loading w-67 top-27 absolute left--11 z-10">
              <span className="dot h-17 w-17 margin-left-8 animate-cycleOne float-left rounded-full bg-gray-800"></span>
              <span className="dot h-17 w-17 margin-left-8 animate-cycleTwo float-left rounded-full bg-gray-800"></span>
              <span className="dot h-17 w-17 margin-left-8 animate-cycleThree float-left rounded-full bg-gray-800"></span>
            </span>
          </span>
        </span> */}
        <span className="mt-40"></span>
        <Message type={"send"} tail={true}>
          hello there
        </Message>
        <Message type={"receive"} tail={true}>
          hello there
        </Message>
        {/* /////////////////////////////////////////////////////////////////////////////// */}
        <Message type={"receive"} tail={false}>
          15/12 11:00
        </Message>
        <Message type={"receive"} tail={true}>
          Βάλε κάτι κόκκινο και ελα
        </Message>
        <Message type={"send"} isItLoading={true} tail={true}></Message>
        <Message type={"receive"} isItLoading={true} tail={true}></Message>
        {/* <div className="rounded-full rounded-bl-none bg-[#f0f0f0] shadow-inner">
          <h1 className="p-8 text-left text-lg font-extrabold text-red">
            15/12 11:00
          </h1>
        </div>
        <div className="rounded-full rounded-tl-none bg-[#f0f0f0] shadow-inner">
          <h1 className="p-8 text-left text-lg font-extrabold text-red ">
            Βάλε κάτι κόκκινο και ελα
          </h1>
        </div> */}
        <div className="my-5 self-end rounded-full rounded-br-none bg-white shadow-inner">
          <div className="flex h-20 w-28 flex-row items-center justify-center gap-2 rounded-full bg-white p-2">
            <div className="h-4 w-4 animate-bounce rounded-full bg-red"></div>
            <div className="h-4 w-4 animate-bounce rounded-full bg-red [animation-delay:-.3s]"></div>
            <div className="h-4 w-4 animate-bounce rounded-full bg-red [animation-delay:-.5s]"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
