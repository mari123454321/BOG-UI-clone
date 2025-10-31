import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
interface LoginContextType {
    login: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginContext = createContext<LoginContextType | undefined>(undefined)

export function LoginProvider({ children }: { children: ReactNode }) {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin(): LoginContextType{
    const context = useContext(LoginContext)
    if(!context){
        throw new Error("idk check LoginContext")
    }
    return context
}