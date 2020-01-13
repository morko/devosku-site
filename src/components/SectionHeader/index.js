import React from "react";
import "./index.scss";

export default function SectionHeader({
  children,
  className = "SectionHeader"
}) {
  return <header className={className}>{children}</header>;
}
