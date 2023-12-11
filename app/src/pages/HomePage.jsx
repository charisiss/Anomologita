import Wrapper from "../components/Layout/Wrapper";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-start w-full h-[87vh] px-5 gap-10">
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none shadow-inner">
          <h1 className="text-xl font-extrabold text-red p-8 uppercase">
            Γραψε το ανομολογητο σου
          </h1>
        </div>
        <div className="bg-red rounded-full rounded-br-none shadow-inner">
          <h1 className="text-xl font-extrabold text-white p-8 uppercase">
            Διαβασε τα ανομολογητα
          </h1>
        </div>

        <div className="bg-white rounded-full rounded-br-none shadow-inner self-end my-5">
          <div className="flex flex-row gap-2 bg-white h-20 w-28 p-2 items-center justify-center rounded-full">
            <div className="w-4 h-4 rounded-full bg-red animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-red animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-red animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
        {/* <div className="bg-red rounded-full rounded-br-none shadow-inner">
          <h1 className="text-2xl font-extrabold text-white p-8 uppercase">
            Διαβασε τα ανομολογητα
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none text-start shadow-inner">
          <h1 className="text-2xl font-extrabold text-red p-8 px-16 uppercase">
            ...
          </h1>
        </div>
        <div className="bg-red rounded-full rounded-br-none shadow-inner">
          <h1 className="text-2xl font-extrabold text-white p-8 uppercase">
            Διαβασε τα ανομολογητα
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none text-start shadow-inner">
          <h1 className="text-2xl font-extrabold text-red p-8 px-16 uppercase">
            ...
          </h1>
        </div>
        <div className="bg-red rounded-full rounded-br-none shadow-inner">
          <h1 className="text-2xl font-extrabold text-white p-8 uppercase">
            Διαβασε τα ανομολογητα
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none text-start shadow-inner">
          <h1 className="text-2xl font-extrabold text-red p-8 px-16 uppercase">
            ...
          </h1>
        </div>
        <div className="bg-red rounded-full rounded-br-none shadow-inner">
          <h1 className="text-2xl font-extrabold text-white p-8 uppercase">
            Διαβασε τα ανομολογητα
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none text-start shadow-inner">
          <h1 className="text-2xl font-extrabold text-red p-8 px-16 uppercase">
            ...
          </h1>
        </div>
        <div className="bg-red rounded-full rounded-br-none shadow-inner">
          <h1 className="text-2xl font-extrabold text-white p-8 uppercase">
            Διαβασε τα ανομολογητα
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none text-start shadow-inner">
          <h1 className="text-2xl font-extrabold text-red p-8 px-16 uppercase">
            ...
          </h1>
        </div>
        <div className="bg-red rounded-full rounded-br-none shadow-inner">
          <h1 className="text-2xl font-extrabold text-white p-8 uppercase">
            Διαβασε τα ανομολογητα
          </h1>
        </div>
        <div className="bg-[#f0f0f0] rounded-full rounded-bl-none text-start shadow-inner">
          <h1 className="text-2xl font-extrabold text-red p-8 px-16 uppercase">
            ...
          </h1>
        </div> */}
      </div>
    </Wrapper>
  );
}
