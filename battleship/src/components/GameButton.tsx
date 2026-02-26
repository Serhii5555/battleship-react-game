import React from "react";

type Props = {
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
  overrideStyle?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
};

export default function GameButton({
  onClick,
  disabled,
  ariaLabel,
  children,
  className = "",
  overrideStyle,
  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`game-button ${className}`}
      style={overrideStyle}
    >
      {children}
    </button>
  );
}
