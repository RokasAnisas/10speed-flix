import { FC, ReactNode } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const RouterProvider: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
};
