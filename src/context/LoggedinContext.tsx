import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import useLocalStorage from "../hooks/useLocalStorage"


interface LoggedinContextType {
  loggedin: boolean
  setLoggedin: React.Dispatch<React.SetStateAction<boolean>>
}

const LoggedinContext = createContext<LoggedinContextType | undefined>(undefined)

export function LoggedinProvider({ children }: { children: ReactNode }) {
  const [loggedin, setLoggedin] = useLocalStorage("loggedIn", false)

  return (
    <LoggedinContext.Provider value={{ loggedin, setLoggedin }}>
      {children}
    </LoggedinContext.Provider>
  );
}

export function useLoggedin(): LoggedinContextType {
  const context = useContext(LoggedinContext)
  if (!context) {
    throw new Error("idk check LoggedinContext")
  }
  return context
}