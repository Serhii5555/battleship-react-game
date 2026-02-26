import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function HeaderText({ children, className = "", style }: Props) {
  return (
    <h1 className={`text-5xl font-bold ${className}`} style={style}>
      {children}
    </h1>
  );
}
