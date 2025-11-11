import { Link } from "react-router-dom"
type WebsitesContentprops = {
    link: string
    content: string
}

export default function WebsitesContent({ link, content }: WebsitesContentprops) {
    return (
        <Link to="">
            <div className="dashboard-header-websites-card">
                <div className="dashboard-header-websites-card-texts">
                    <h2>{link}</h2>
                    <span>{content}</span>
                </div>
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