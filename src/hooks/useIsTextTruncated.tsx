import { useEffect, useState, type RefObject } from "react";


export default function useIsTextTruncated(ref: RefObject<HTMLElement | null>) {
    const [isTruncated, setIsTruncated] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const check = () => {
            const isOverflowing = element.scrollWidth > element.clientWidth + 1
            setIsTruncated(isOverflowing)
        }

        check()
        const observer = new ResizeObserver(check)
        observer.observe(element)

        return () => observer.disconnect()
    }, [ref])
    
    return isTruncated
}
//1. check if ref is null
//2. check if text is overflowing
//3. use resize observer
//4. cleanup