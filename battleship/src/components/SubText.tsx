import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function SubText({ children, className = "", style }: Props) {
  return (
    <p className={`${className}`} style={style}>
      {children}
    </p>
  );
}
