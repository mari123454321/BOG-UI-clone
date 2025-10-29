import { Link } from "react-router-dom"
type Props = {
    icon: string
    title: string
    text: string
}
export default function({icon, title, text}:Props){
    return(
        <div className="option-button-container">
            <Link to="/PageDoesNotExist" >
                <div className="info-container">
                    <img src={icon} alt="this shouldn't even be a img"/>
                    <div className="option-text">
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
                <button>
                    O
                </button>
            </Link>
        </div>
    )
}