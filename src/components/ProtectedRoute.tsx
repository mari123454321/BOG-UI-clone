import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";

type ProtectedRoutePropsType ={
    children:  ReactElement}

export default function ProtectedRoute({ children }:ProtectedRoutePropsType) {
  const enteredProperly = sessionStorage.getItem("fromLogin");
  if (!enteredProperly) return <Navigate to="/login" replace />;
  sessionStorage.removeItem("fromLogin");
  return children;
}
