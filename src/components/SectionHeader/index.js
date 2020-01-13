import React from "react";
import "./index.scss";

export default function SectionHeader({
  children,
  type = "normal",
  className = ""
}) {
  return (
    <header className={`SectionHeader sh-${type} ${className}`}>{children}</header>
  );
}
