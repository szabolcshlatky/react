import React from "react";
import { Props } from "./types";

export default function Abbr({
  title,
  dataValue,
  children,
}: Props): React.ReactNode {
  return (
    <data value={dataValue}>
      <dfn>
        <abbr title={title}>{children}</abbr>
      </dfn>
    </data>
  );
}
