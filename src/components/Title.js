import React from "react";

export default function Title(props) {
  const { title } = props;
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
}
