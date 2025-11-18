import { Navigate, Outlet } from "react-router-dom"
import { useLoggedin } from "../../context/LoggedinContext"

// type ProtectedRoutePropsType ={
//     children:  ReactElement}

export default function useProtectedRoute() {
  const enteredProperly = useLoggedin().loggedin
  if (!enteredProperly) return <Navigate to="/personal" replace />
  return <Outlet/>
}
