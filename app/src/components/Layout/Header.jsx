export default function Header() {
  return (
    <div className="sticky top-0 bg-white  h-[10vh]">
      <div className="h-3/5 flex justify-center">
        <img className="w-auto h-auto" src="redxmaslogo.png"></img>
        <img className="h-auto w-auto" src="Infititis-Logo.png"></img>
      </div>
      <div className="h-2/5 flex justify-center border-t-[#1a1a1a] border">
        <h2 className="text-[#1a1a1a] w-1/2 border border-r-[#1a1a1a] text-base leading-7 font-bold px-3">
          ΓΡΑΨΕ
        </h2>
        <h2 className="text-[#1a1a1a] w-1/2 border text-base leading-7 font-bold px-3 ">
          ΔΙΑΒΑΣΕ
        </h2>
      </div>
    </div>
  );
}
