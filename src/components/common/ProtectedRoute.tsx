import { Navigate } from "react-router-dom"
import type { ReactElement } from "react"
import { useLoggedin } from "../../context/LoggedinContext"

type ProtectedRoutePropsType ={
    children:  ReactElement}

export default function useProtectedRoute({ children }:ProtectedRoutePropsType) {
  const enteredProperly = useLoggedin().loggedin
  if (!enteredProperly) return <Navigate to="/personal" replace />
  return children
}
