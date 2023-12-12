import Wrapper from "../components/Layout/Wrapper";
import Message from "../components/common/Message";

export default function HomePage() {
  return (
    <Wrapper>
      {/* <div className="flex flex-col justify-center items-start w-full h-[87vh] px-5 gap-10"> */}
      <div className="flex h-full w-full flex-col items-start justify-center gap-2 px-5">
        <Message type={"receive"} tail={true}>
          Γράψε το Ανομολογητό σου
        </Message>
        <Message type={"send"} tail={true}>
          Διάβασε τα Ανομολόγητα
        </Message>
        <Message type={"receive"} isItLoading={true} tail={true}>
          Γραψε το Ανομολόγητο σου
        </Message>
        {/* <div className="flex w-full flex-col items-start justify-center gap-10 px-5">
        <div className="rounded-full rounded-bl-none bg-[#f0f0f0] shadow-inner">
          <h1 className="p-8 text-2xl font-extrabold uppercase text-red">
            Γραψε το ανομολογητο σου
          </h1>
        </div>
        <div className="rounded-full rounded-br-none bg-red shadow-inner">
          <h1 className="p-8 text-2xl font-extrabold uppercase text-white">
            Διαβασε τα ανομολογητα
          </h1>
        </div>
        <div className="rounded-full rounded-bl-none bg-[#f0f0f0] text-start shadow-inner">
          <h1 className="p-8 px-16 text-2xl font-extrabold uppercase text-red">
            ...
          </h1>
        </div>
        <div className="my-5 self-end rounded-full rounded-br-none bg-white shadow-inner">
          <div className="flex h-20 w-28 flex-row items-center justify-center gap-2 rounded-full bg-white p-2">
            <div className="h-4 w-4 animate-bounce rounded-full bg-red"></div>
            <div className="h-4 w-4 animate-bounce rounded-full bg-red [animation-delay:-.3s]"></div>
            <div className="h-4 w-4 animate-bounce rounded-full bg-red [animation-delay:-.5s]"></div>
          </div>
        </div>
      </div> */}
      </div>
    </Wrapper>
  );
}
