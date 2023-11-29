import Wrapper from "../components/Layout/Wrapper";
import MessageComponent from "../components/MessageComponent";

export default function ShowPage() {
  return (
    <Wrapper hideHeaderMenu="true">
      <div className="flex flex-col items-center w-full h-[87vh] gap-10 relative">
        <div className="absolute bottom-0 right-0 z-20">
          <p className="text-xl">SCAN TO WRITE</p>

          <img className="w-44 rounded-tl-xl" src="/qr.png"></img>
        </div>
        <div className="p-10">
          <h2 className="text-center text-5xl font-bold pb-3 text-white shadow-lg">
            TOP 3
          </h2>
          <div className="grid grid-cols-3 gap-5">
            <MessageComponent
              title="WEB DD MONO"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
            <MessageComponent
              title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
            <MessageComponent
              title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-10 h-4/5 p-10">
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <MessageComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
        </div>
      </div>
    </Wrapper>
  );
}
