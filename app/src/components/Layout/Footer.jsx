export default function Footer() {
  return (
    <div className="bottom-0 z-20 flex w-full flex-col items-center justify-center gap-4 bg-[#430004] p-4 sm:absolute sm:h-auto sm:flex-row sm:p-0 md:flex-col xl:flex-row">
      {/* First Row: XOXO and InfinityGreece Logo */}
      <div className="flex items-center justify-center xl:justify-start">
        <img className="block h-12" src="xoxo.png" alt="xoxo" />
        <img
          className="ml-4 block h-12"
          src="Infititis-Logo.png"
          alt="InfititisLogo"
        />
        <p className="mx-4 hidden text-sm text-white xl:block">
          Created by InfinityGreece Web Team &#169; 2023
        </p>
      </div>

      {/* Text (visible on smaller screens) */}
      <div className="text-center sm:text-left xl:hidden">
        <p className="text-sm text-white">
          Created by InfinityGreece Web Team &#169; 2023
        </p>
      </div>

      {/* Second Row: InfinityGreece and Kiss Logos */}
      <div className="flex items-center justify-center xl:justify-start">
        <img
          className="block h-14 sm:h-12"
          src="infinityGreeceLogo.png"
          alt="infinityGreeceLogo"
        />
        <img className="ml-4 block h-12" src="kiss.png" alt="kiss" />
      </div>
    </div>
  );
}
