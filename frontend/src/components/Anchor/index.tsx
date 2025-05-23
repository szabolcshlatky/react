import React from "react";
import { Props } from "./types";

export default function Anchor({
  className = "",
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  title = "Opens in a new web-browser-tab",
  ariaLabel = "",
  children,
}: Props): React.ReactNode {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
