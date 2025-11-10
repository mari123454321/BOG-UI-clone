import type { ReactNode } from "react"

type DropDownWrapperProps = {
    children: ReactNode
}

export default function DropDownWrapper({ children }: DropDownWrapperProps) {
    return (
        <div className="dashboard-header-dropdown-wrapper">
            {children}
        </div>
    )

}