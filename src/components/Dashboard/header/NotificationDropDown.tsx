import { useState, type JSX } from "react"
import { useDarkMode } from "../../../context/DarkModeContext"

export default function NotificationDropDown() {
    const [notification] = useState(false)
    const darkmode = useDarkMode().darkMode
    //render this if there are no notifications
    const noNotification: JSX.Element = (
        <div className="notification-dropdown">
            <div className="notification-dropdown-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={!darkmode? "#4f4f4f" : "#aeafb0"} stroke={!darkmode? "#4f4f4f" : "#aeafb0"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
            </div>
            <p>ახალი შეტყობინება არ გაქვს</p>
        </div>

    )
    return (
        <div className="notification-dropdown-wrapper">
            {!notification ? noNotification : <p>tehre are suposed to be notifications</p>}
        </div>
    )
}
