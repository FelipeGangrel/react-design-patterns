import React from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Root: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={
        (twMerge("bg-white shadow-md rounded-md border-slate-50 border-2"),
        props.className)
      }
    >
      {children}
    </div>
  );
};
