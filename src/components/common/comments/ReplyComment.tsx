import React from "react";
import ButtonComponent from "../button";

import Vector from "../../../../public/icons/Vector.png";
import { LuCalendarDays } from "react-icons/lu";

const ReplyComment = () => {
  return (
    <div>
      {/* header */}
      <div className="flex items-center gap-2 text-xs">
        <div className="h-[3px] w-[80%] bg-linear-to-r from-gray to-ehite  rounded-2xl bg-white"></div>

        <ButtonComponent
          text="پاسخ کاربران"
          icon={Vector}
          linke=""
          style="bg-secondary text-sm leading-7 inset-shadow-sm inset-shadow-white/20"
        />
      </div>

      {/* name */}
      <div className="flex flex-row-reverse group-hover:text-black mt-4">
        <p> | محمد رضا ساداتی  </p>
        <div className="flex flex-row-reverse opacity-60">
          <LuCalendarDays className="m-1" />
          <p> 
             مرداد12
             -
            1401/
            13:33
          </p>
        </div>
      </div>

      {/* text */}

      <p className="text-right group-hover:text-black my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis nemo totam necessitatibus odio eum natus 
        ipsum excepturi! Pariatur nihil velit rerum eos quibusdam voluptatum beatae laudantium rem mollitia ad!</p>
    </div>
  );
};

export default ReplyComment;
