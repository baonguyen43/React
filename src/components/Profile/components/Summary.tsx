import React from "react";

type Props = {
  title?: string;
  description?: string;
};

export default function Summary({
  title = "LOREM",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}: Props) {
  return (
    <div>
      <div style={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
        {title}
      </div>
      <div>{description}</div>
    </div>
  );
}
