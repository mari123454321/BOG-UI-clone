
type NominationInputValueProps = {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    inputLabel: string
}
export default function NominationForm({ inputValue, setInputValue, inputLabel }: NominationInputValueProps) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex grow flex-col justify-around border border-(--dashboard-components-background-color-click) focus-within:border-(--orange) transition-[border] rounded-lg
            min-h-14 px-4 py-1
            ">
                <label htmlFor="Nomination" className="extra-small-text focus:border-(orange)">
                    {inputLabel}
                </label>
                <input
                    className="outline-0"
                    type="text"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                    id="Nomination" 
                />
            </div>
        </form>
    )
}