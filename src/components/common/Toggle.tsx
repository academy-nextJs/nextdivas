// components/ui/Toggle.tsx
"use client";

import { motion } from "framer-motion";

type ToggleOption<T> = {
  value: T;
  label: string;
};

interface ToggleProps<T extends string> {
  options: ToggleOption<T>[];
  value: T;
  onChange: (value: T) => void;
  containerClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

export function Toggle<T extends string>({
  options,
  value,
  onChange,
  containerClassName,
  activeClassName,
  inactiveClassName,
}: ToggleProps<T>) {
  return (
    <motion.div
      className={
        containerClassName ||
        "flex bg-[#303030] rounded-lg py-1.5 transition-all"
      }
      layout
    >
      {options.map((opt) => {
        const isActive = value === opt.value;

        return (
          <motion.button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              isActive
                ? activeClassName || "text-white bg-[#8CFF45]"
                : inactiveClassName || "text-white hover:bg-[#8CFF45]/40"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {opt.label}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
