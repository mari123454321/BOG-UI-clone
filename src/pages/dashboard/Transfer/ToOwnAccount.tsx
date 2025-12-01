import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout"
import { useDarkMode } from "../../../context/DarkModeContext"

export default function ToOwnAccount() {
    const { darkMode } = useDarkMode()
    return (
        <TransferPageCardLayout amount={9.99} currency="$" >
            <div>children</div>
        </TransferPageCardLayout>
    )
}