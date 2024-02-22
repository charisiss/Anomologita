export default function Footer() {
  return (
    <div className="w-full bg-red">
      <div className="flex items-center justify-center">
        <p className="mx-4 hidden text-sm text-white xl:block">
          Created by InfinityGreece Web Team &#169; 2024
        </p>
      </div>
      <div className="text-center sm:text-left xl:hidden">
        <p className="text-center text-sm text-white">
          Created by InfinityGreece Web Team
        </p>
      </div>
      <div className="flex items-center justify-center xl:justify-start"></div>
    </div>
  );
}
