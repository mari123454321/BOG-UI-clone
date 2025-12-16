import { useEffect } from "react";
// make ignoreRef optional
export default function useClickOutside<T extends HTMLElement>(
    ref: React.RefObject<T | null>,
    ignoreRef: React.RefObject<HTMLElement | null> ,
    onClickoutside: () => void
) {
    useEffect(()=>{
        function handleClick(e: MouseEvent){
            //if ref isnt null and if ref doesnt equal element being clicked
            if(ref.current && !ref.current.contains(e.target as Node) && 
                !(ignoreRef?.current && ignoreRef.current.contains(e.target as Node))){
                onClickoutside()
            }
        }
        document.addEventListener("mousedown", handleClick)
        return ()=> document.removeEventListener("mousedown",  handleClick)

    },[ref, onClickoutside])

}