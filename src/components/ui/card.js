import React from "react";

export function Card({ children }) {
  return <div className="rounded-xl shadow-md bg-white dark:bg-zinc-800">{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}