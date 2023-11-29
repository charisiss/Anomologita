import Wrapper from "../components/Layout/Wrapper";
import TestimonialComponent from "../components/TestimonialComponent";

export default function ShowPage() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center w-full h-[77vh] gap-10 relative">
        <div className="absolute top-0 right-0">
          <img className="w-48 rounded-bl-xl" src="/qr.png"></img>
        </div>
        <div className="p-10">
          <h2 className="text-center text-5xl font-bold pb-3 text-white shadow-lg">
            TOP 3
          </h2>
          <div className="grid grid-cols-3 gap-5">
            <TestimonialComponent
              title="WEB DD MONO"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
            <TestimonialComponent
              title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
            <TestimonialComponent
              title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
              likeCount={142}
              color={"red"}
              stroke={"white"}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-10 h-4/5 p-10">
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
          <TestimonialComponent
            title="ΠΟΛΥ ΚΑΛΟ ΑΥΤΟ ΤΟ REDXMAS ΡΕ ΠΑΙΔΙΑ"
            likeCount={142}
          />
        </div>
      </div>
    </Wrapper>
  );
}
