import Wrapper from "@components/Layout/Wrapper";
import Message from "@components/common/Message";

export default function HomePage() {
  return (
    <Wrapper>
      {/* <div className="flex flex-col justify-center items-start w-full h-[87vh] px-5 gap-10"> */}
      <div className="flex h-[80vh] w-full flex-col items-start justify-center gap-2 px-5">
        <a href="/write" className="flex w-full">
          <Message type={"receive"} tail={true}>
            Γράψε το Ανομολογητό σου
          </Message>
        </a>
        <a href="/read" className="flex w-full justify-end">
          <Message type={"send"} tail={true}>
            Διάβασε τα Ανομολόγητα
          </Message>
        </a>
        <Message type={"receive"} isItLoading={true} tail={true}></Message>
      </div>
    </Wrapper>
  );
}
