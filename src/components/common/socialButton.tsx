// components/SocialButton.tsx
import { motion } from "framer-motion";

interface SocialButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export function SocialButton({ icon, children, onClick }: SocialButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="inline-flex w-full justify-center items-center gap-2 rounded-2xl border bg-white py-2 px-4 text-sm font-medium shadow-sm transition"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {icon}
      {children}
    </motion.button>
  );
}
