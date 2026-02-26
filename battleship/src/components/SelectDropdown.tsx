import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export default function Dropdown({
  label,
  options,
  value,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);
  const primaryColor = "#ae0099";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="w-full max-w-xs relative">
      {label && (
        <p
          className="text-center mb-1 font-medium"
          style={{ color: primaryColor }}
        >
          {label}
        </p>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full p-3 flex justify-between items-center border rounded transition"
        style={{
          borderColor: primaryColor,
          color: primaryColor,
        }}
      >
        <span>{selected?.label}</span>
        {open ? (
          <ChevronUp size={18} color={primaryColor} />
        ) : (
          <ChevronDown size={18} color={primaryColor} />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-10 w-full bg-white border mt-2 shadow-lg overflow-hidden"
            style={{ borderColor: primaryColor }}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-2 transition"
                style={{
                  backgroundColor: opt.value === value ? primaryColor : "white",
                  color: opt.value === value ? "white" : primaryColor,
                }}
                onMouseEnter={(e) => {
                  if (opt.value !== value)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#f3e0f9";
                }}
                onMouseLeave={(e) => {
                  if (opt.value !== value)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "white";
                }}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
