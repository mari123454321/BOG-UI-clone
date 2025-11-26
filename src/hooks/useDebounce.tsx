import { useEffect } from "react";

export default function useDebounce(func:()=>void, timer: number): void{
    useEffect(()=>{
        const id = setTimeout(func, timer)
        return ()=>clearTimeout(id)
    }, [func, timer])
}

