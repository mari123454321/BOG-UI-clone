import type { ChangeEventHandler } from "react"



type BuySellItemProps = {
    onChange: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    currencySymbol: string
    inputValue: number | ""
}

export default function BuySellItem({ placeholder, onChange, currencySymbol, inputValue }: BuySellItemProps) {
    return (
        <div className="flex flex-row justify-between items-center w-1/2 h-14 p-4 title border border-(--dashboard-components-background-color-click) focus-within:border-(--orange) transition-[border] 
        first:rounded-l-lg last:rounded-r-lg
        ">
            <input
                type="number"
                className="outline-none"
                placeholder={placeholder}
                min="0.1"
                value={inputValue}
                onChange={onChange}
                />
            <div className="ml-4 mr-2 bg-(--button-hover-dark) w-12 h-6 rounded-sm flex justify-center items-center text-[13px] text-(--text-primary)">
                {currencySymbol}
            </div>
        </div>
    )
}