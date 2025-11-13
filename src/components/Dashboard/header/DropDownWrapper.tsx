import { useRef, type ReactNode } from "react"
import useClickOutside from "../../../hooks/useClickOutside"

type DropDownWrapperProps = {
    children: ReactNode
    ignoreRef: React.RefObject<HTMLElement|null>,  
    onClose: ()=>void
}

export default function DropDownWrapper({ children, ignoreRef, onClose }: DropDownWrapperProps) {
    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, ignoreRef ,onClose)
    return (
        <div ref={ref} className="dashboard-header-dropdown-wrapper">
            {children}
        </div>
    )

}