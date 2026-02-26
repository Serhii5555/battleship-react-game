import React from "react";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Container({ children, style }: Props) {
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 12,
    padding: 20,
    ...style,
  };

  return <div style={containerStyle}>{children}</div>;
}
