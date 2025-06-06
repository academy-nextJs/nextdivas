import { BiSolidRightArrow } from "react-icons/bi"


type Props = {
    title: string,
    mainTitle:string ,
    details:string,
}

const LandingTitle = ({title , mainTitle , details}: Props) => {
  return (
    <div className="grid gap-4 max-sm:gap-2">
         <div className="font-semibold text-primary flex gap-1 items-center justify-center">
           <BiSolidRightArrow className="text-[10px] opacity-50 max-sm:hidden" />
           <BiSolidRightArrow className="text-xs opacity-90" />
           <BiSolidRightArrow />
           <h1 className="mx-2"> {title} </h1>
           <BiSolidRightArrow className=" rotate-180" />
           <BiSolidRightArrow className="text-xs rotate-180 opacity-90" />
           <BiSolidRightArrow className="text-[10px] rotate-180 opacity-50 max-sm:hidden" />
         </div>
         <h1 className="text-[30px] max-sm:text-[12px] font-medium text-center text-white">
           {" "}
          {mainTitle}
         </h1>
         <p className="text-center text-sm text-white max-sm:hidden">
            {details}
         </p>
       </div>
  )
}

export default LandingTitle