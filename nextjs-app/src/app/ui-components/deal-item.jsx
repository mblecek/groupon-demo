import React from "react";
export const DealItem = ({name, price}) => {
  return (
    <div key={name}>
      <span>{name}</span> - <span>{`${price}`}</span>
    </div>
  );
};
