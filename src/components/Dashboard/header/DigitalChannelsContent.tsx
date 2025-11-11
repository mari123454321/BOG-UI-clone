import { Link } from "react-router-dom"
type DigitalChannelsContentProps = {
    content: string
    color: string
}
export default function DigitalChannelsContent({ content, color }: DigitalChannelsContentProps) {
    return (
        <Link to="">
            <div className="dashboard-header-digital-content-card">
                <div className="dashboard-header-digital-content-card-logo" style={{ backgroundColor: color }}>
                    <img src="BOGlogo.png" alt="logo" />
                </div>
                <span>{content}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right-icon lucide-arrow-right"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>

            </div>
        </Link>
    )
}