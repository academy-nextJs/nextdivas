import React from "react";
import { motion } from "framer-motion";

interface ToggleType {
  mode: string[];
  onChange: (mode: string[]) => void;
}

const Toggle = ({ mode, onChange }: ToggleType) => {
  return (
    <motion.div
      className="flex justify-center rounded-xl bg-gray p-1.5  gap-2 text-sm"
      layout
    >
      {/* <h4 className="py-2 px-3 opacity-80" > </h4>
      <h4 className="py-1.5 px-3 bg-primary text-black rounded-xl">
       
      </h4> */}
      {mode.map((item, i) => (
        <motion.button 
        key={i}
        className={`
            ${mode[0] ? "": ""}
            `}
        > {item} </motion.button>
      ))}
    </motion.div>
  );
};

export default Toggle;
