import Wrapper from "@components/Layout/Wrapper";
import Message from "@components/common/Message";

export default function HomePage() {
  return (
    <Wrapper>
      {/* <div className="flex flex-col justify-center items-start w-full h-[87vh] px-5 gap-10"> */}
      <div className="flex h-[80vh] w-full flex-col items-start justify-center gap-2 px-5">
        <Message type={"receive"} tail={true}>
          <a href="/write">Γράψε το Ανομολογητό σου</a>
        </Message>
        <Message type={"send"} tail={true}>
          <a href="/read">Διάβασε τα Ανομολόγητα</a>
        </Message>
        <Message type={"receive"} isItLoading={true} tail={true}></Message>
      </div>
    </Wrapper>
  );
}
