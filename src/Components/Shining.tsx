import { GiFallingStar } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

const Shining = () => {
  return (
      <div className="w-[60%] h-[40vw]">
          <div className="text-xl font-semibold mt-6 flex justify-between w-full">
              <h1 className="flex gap-2 items-center">Shining Stars <GiFallingStar className="-rotate-90" size={25} color="yellow" /></h1>
              <p className="font-light text-base flex items-center cursor-pointer gap-1">View More <IoIosArrowForward size={18} /></p>
          </div>
          <div className=""></div>    
      </div>
  )
}

export default Shining