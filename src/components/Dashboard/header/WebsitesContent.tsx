import { Link } from "react-router-dom"
type WebsitesContentprops = {
    link: string
    content: string
}

export default function WebsitesContent({ link, content }: WebsitesContentprops) {
    const chevronRightIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="m9 18 6-6-6-6" /></svg>);

    return (
        <Link to="">
            <div className="dashboard-header-websites-card">
                <div className="dashboard-header-websites-card-texts">
                    <h2>{link}</h2>
                    <span>{content}</span>
                </div>
                {chevronRightIcon}

            </div>
        </Link>
    )
}