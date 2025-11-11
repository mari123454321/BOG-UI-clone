import { useRef, type ReactNode } from "react"
import useClickOutside from "../../../hooks/useClickOutside"

type DropDownWrapperProps = {
    children: ReactNode
    onClose: ()=>void
}

export default function DropDownWrapper({ children, onClose }: DropDownWrapperProps) {
    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, onClose)
    return (
        <div ref={ref} className="dashboard-header-dropdown-wrapper">
            {children}
        </div>
    )

}