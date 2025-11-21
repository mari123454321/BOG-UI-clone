import type { JSX } from "react"
import { useDarkMode } from "../../../context/DarkModeContext"

type TemplateItemType = {
    img: JSX.Element
    title: string
    typeOFTemplate: string
}

export default function TemplateCardItem({ img, title, typeOFTemplate }: TemplateItemType) {
    const {darkMode} = useDarkMode()
    return (
        <div>
            <div className={`template-card-item-img ${!darkMode && "dark"}`}>
                {img}
            </div>
            <h3 className={`template-card-item-title ${!darkMode && "dark"}`}>
                {title}
            </h3>
            <span className={`template-card-item-type ${!darkMode && "dark"}`}>
                {typeOFTemplate}
            </span>
        </div>
    )
}