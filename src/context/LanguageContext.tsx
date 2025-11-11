import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
export type lang = "Geo" | "Eng"

interface LanguageContextType {
    language: lang
    setLanguage: React.Dispatch<React.SetStateAction<lang>>
    changeLanguage: ()=>void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<lang>("Geo");
  function changeLanguage():void{
    if(language==="Geo"){
      ()=>setLanguage("Eng")
    }else{
      ()=>setLanguage("Eng")
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, changeLanguage }}>
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