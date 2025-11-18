import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string , initialValue: T):[T, React.Dispatch<React.SetStateAction<T>>]{
    const [value, setValue] = useState(()=>{
        try{
            const item = localStorage.getItem(key)
            return item !==null ? JSON.parse(item) : initialValue
        } catch{
            return initialValue
        }
    })
    useEffect(()=>{
        try{
            localStorage.setItem(key, JSON.stringify(value))
        }catch{}
    },[])
    return [value, setValue]
}