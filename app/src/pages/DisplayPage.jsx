import Wrapper from "../components/Layout/Wrapper";
import MessageComponent from "../components/MessageComponent";

export default function DisplayPage() {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-start w-full h-[87vh] px-5 gap-5">
        <MessageComponent title="WEB DD MONO" likeCount={142} />
        <MessageComponent
          title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
          likeCount={142}
        />
      </div>
    </Wrapper>
  );
}
