import type { ChosenAccountType } from "../../../pages/dashboard/Transfer/ToOwnAccount"

type BuySellItemProps = {
    setAmount: React.Dispatch<React.SetStateAction<number|null>>
    placeholder: string
    currencySymbol: string
}

export default function BuySellItem({ placeholder, setAmount, currencySymbol }: BuySellItemProps) {
    return (
        <div className="flex flex-row justify-between items-center w-1/2 h-14 p-4 title border border-(--dashboard-components-background-color-click) focus-within:border-(--orange) transition-[border] 
        first:rounded-l-lg last:rounded-r-lg
        ">
            <input
                type="number"
                className="outline-none"
                placeholder={placeholder}
                onChange={(e) => setAmount(Number(e.target.value))} />
            <div className="ml-4 mr-2 bg-(--button-hover-dark) w-12 h-6 rounded-sm flex justify-center items-center text-[13px] text-(--text-primary)">
                {currencySymbol}
            </div>
        </div>
    )
}