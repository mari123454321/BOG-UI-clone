import { Link } from "react-router-dom"
type Props = {
    icon?: string
    title: string
    text: string
}
export default function ({ icon, title, text }: Props) {
    return (
        <Link to="/PageDoesNotExist" className="option-button-container">
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