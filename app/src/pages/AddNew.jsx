import Wrapper from "../components/Layout/Wrapper";

export default function AddNew() {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-start w-full h-[85vh] px-5 gap-10">
        <div className="bg-[#f0f0f0] rounded-xl w-full h-auto flexflex-col justify-around border-2 border-[#1a1a1a]">
          <h1 className="text-lg font-extrabold text-black uppercase my-5">
            Γραψε το ανομολογητο σου
          </h1>

          <input
            className="bg-[#d1d5db] rounded-md w-4/5 h-12 text-center mb-5 text-black"
            placeholder="Γράψε κάτι..."
          ></input>
          <input
            className="bg-[#d1d5db] rounded-md w-4/5 h-12 text-center mb-5 text-black"
            placeholder="#Ο Αριθμός Σου"
          ></input>
          <button className="bg-[#1a1a1a] w-full rounded-t-none rounded-b-xl px-3 m-[-1px]">
            ΑΠΟΣΤΟΛΗ
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
