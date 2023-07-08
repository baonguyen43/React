import React from "react";

type Props = {
  title?: string;
  description?: string;
  text?: string;
};

export default function InfoContact({
  title = "ADDRESS",
  description = "123 Stress",
  text = "123Stress",
}: Props) {
  return (
    <div style={{ alignContent: "center" }}>
      <div style={{ color: "white", fontWeight: 500 }}>{title}</div>
      <div style={{ color: "white" }}>{description}</div>
      <div style={{ color: "white" }}>{text}</div>
    </div>
  );
}
