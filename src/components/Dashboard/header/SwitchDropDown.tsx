import { LanguageProvider, useLanguage } from "../../../context/LanguageContext"
import { digitalChanelsinfo } from "../../../info/info"
import DigitalChannelsContent from "./DigitalChannelsContent"
import { websitesInfo } from "../../../info/info"
import type { JSX } from "react"
import WebsitesContent from "./WebsitesContent"

export default function SwitchDropDown(){
    const lang = useLanguage().language
    const digitalChannelsContent: JSX.Element[] = digitalChanelsinfo[lang].content.map((content: string, index: number):JSX.Element=>{
        return <DigitalChannelsContent content={content} color={digitalChanelsinfo[lang].color[index]} key={index}/>
    })
    const websitesContent: JSX.Element[] = websitesInfo[lang].content.map((content: string, index: number):JSX.Element=>{
        return <WebsitesContent content={content} link={websitesInfo[lang].links[index]} key={index}/>
    })
    return(
        <div className="switch-dropdown-body">
            <div className="switch-dropdown-section">
                <h2>{digitalChanelsinfo[lang].title}</h2>
                <div className="switch-dropdown-items">
                    {digitalChannelsContent}
                </div>
            </div>
            <div className="switch-dropdown-section">
                <h2>{websitesInfo[lang].title}</h2>
                <div className="switch-dropdown-items">
                    {websitesContent}
                </div>
            </div>

        </div>
    )
}