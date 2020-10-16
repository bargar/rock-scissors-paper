import React from "react";

const Zone = ({ children, className, onClick }) => (
  <li className={className} onClick={onClick}>
    {children}
  </li>
);

export default Zone;
