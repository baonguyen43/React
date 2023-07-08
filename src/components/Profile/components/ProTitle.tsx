import React from "react";

type Props = {
  title?: string;
};

export default function ProTitle({ title = "ILLUSTRATOR" }: Props) {
  return (
    <div
      style={{
        fontSize: 20,
        justifyContent: "center",
        display: "flex",
        color: "white",
        fontWeight: 350,
      }}
    >
      {title}
    </div>
  );
}
