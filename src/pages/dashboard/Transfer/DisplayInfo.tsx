import type { ReactNode } from "react"

type DisplayInfoProps = {
    title: string
    infoToDisplay: ReactNode
    // 
}

export default function DisplayInfo({
    title,
    infoToDisplay,
}: DisplayInfoProps) {
    return (
        <div className="flex grow flex-col justify-around border border-(--dashboard-components-background-color-click) focus-within:border-(--orange) transition-[border] rounded-lg
            min-h-14 px-4 py-1 
            ">
                <h3 className="extra-small-text focus:border-(orange)">
                    {title}
                </h3>
                <span className="text-sm">{infoToDisplay}</span>
            </div>
    )
}
