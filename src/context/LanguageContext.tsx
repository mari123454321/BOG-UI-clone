import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
type lang = "Geo" | "Eng"

interface LanguageContextType {
    language: lang
    setLanguage: React.Dispatch<React.SetStateAction<lang>>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<lang>("Geo");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType{
    const context = useContext(LanguageContext)
    if(!context){
        throw new Error("idk check LanguageContext")
    }
    return context
}