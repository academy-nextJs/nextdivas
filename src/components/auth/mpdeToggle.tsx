// components/ModeToggle.tsx
import { motion } from "framer-motion";

interface ModeToggleProps {
  mode: "login" | "register";
  onChange: (mode: "login" | "register") => void;
}

export function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <motion.div className="flex bg-[#303030] rounded-2xl py-1.5" layout>
      {(["login", "register"] as const).map((m) => (
        <motion.button
          key={m}
          onClick={() => onChange(m)}
          className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-xl ${
            mode === m
              ? "text-white bg-[#8CFF45]"
              : "text-white hover:bg-[#8CFF45]"
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {m === "login" ? "ورود به حساب کاربری" : "ساخت حساب کاربری"}
        </motion.button>
      ))}
    </motion.div>
  );
}
