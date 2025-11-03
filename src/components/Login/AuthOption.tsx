import { Link, useLocation } from "react-router-dom"
type Props = {
    icon: string
    title: string
    text: string
    id?: number
    ToggleLogin: (id:number)=>void
}
export default function AuthOption ({ icon, title, text, id, ToggleLogin }: Props) {
    const location = useLocation().pathname
    const path = id === 1 ? location : "/PageDoesNotExist"
    return (
        <Link to={path} onClick={()=>id && ToggleLogin(id)} className="option-button-container">
            <div className="options-button-content" >
                <div className="info-container">
                    <div className="options-img-container">
                        <img src={icon} alt="this shouldn't even be a img" />
                    </div>
                    <div className="option-text">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
                <button>
                    &#9654;
                </button>
            </div>
        </Link>
    )
}