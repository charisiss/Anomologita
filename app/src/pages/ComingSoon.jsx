import Wrapper from "../components/Layout/Wrapper";

export default function ComingSoon() {
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
            Το πιο hot Χριστουγεννιάτικο πάρτυ της πόλης είναι γεγονός
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
      </div>
    </Wrapper>
  );
}
