import { createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import type { ReactNode } from "react"
interface DarkModeContextType {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const darkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export function useDarkMode(): DarkModeContextType {
  const context = useContext(darkModeContext)
  if (!context) {
    throw new Error("idk check darkmodeContext")
  }
  return context
}