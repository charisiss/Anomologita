// import { useState } from "react";
import Wrapper from "@components/Layout/Wrapper";
import Message from "@components/common/Message";

export default function ComingSoon() {
  // const [loading, setLoading] = useState(true);
  return (
    <Wrapper hideHeaderMenu="true">
      <div className="flex h-full w-full flex-col items-start justify-center gap-2 px-5">
        <Message type={"receive"} tail={false}>
          Έμαθες τα νέα;
        </Message>
        <Message type={"receive"} tail={true}>
          Το RedXmas Party για άλλη μια χρονιά ολοκληρώθηκε!
        </Message>
        <Message type={"send"} tail={true}>
          Πως πήγε;
        </Message>
        <div className="rounded-full rounded-bl-none bg-[#f0f0f0] shadow-inner">
          <h1 className="p-8 text-lg font-extrabold text-red">
            Για 9η συνεχόμενη χρονία έσκισε.
          </h1>
        </div>
        <div className="my-5 self-end rounded-full rounded-br-none bg-red shadow-inner">
          <h1 className="p-8 text-right text-lg font-extrabold text-white ">
            Λέγε ρε, του χρόνου θα πάμε;
          </h1>
        </div>
        <div className="my-5 self-start rounded-full rounded-bl-none bg-white shadow-inner">
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
