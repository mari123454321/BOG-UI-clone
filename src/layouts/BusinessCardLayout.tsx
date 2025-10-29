import { useLanguage } from "../context/LanguageContext" 

const translations = {
    Geo: {
        login:{
            title: "ინტერნეტბანკში შესვლა",
            text: "შეიყვანეთ ან აღადგინეთ მომხმარებლის სახელი და პაროლი",
            icon: "+",    
        },
        register:{
            title: "ინტერნეტბანკში შესვლა",
            text: "შეიყვანეთ ან აღადგინეთ მომხმარებლის სახელი და პაროლი",
            icon: "+",   
        },
        open:{
            title: "პირველი ანგარიშის გახსნა",
            text: "გახდით საქართველოს ბანკის ბიზნეს მომხმარებელი ონლაინ",
            icon: "+",   
        }
        
    },
    Eng: {
        login:{
            title: "Log into Internet Banking",
            text: "Enter or recover your username or password",
            icon: "+",    
        },
        register:{
            title: "Internet Banking registration",
            text: "Register in Business Internet Banking online",
            icon: "+",   
        },
        open:{
            title: "Open your first account",
            text: "Become Bank of Georgia’s business customer online",
            icon: "+",   
        }
    }
}


export default function BusinessCardLayout(){
    const {language} = useLanguage()
    const currentLanguage = translations[language]
    return(
        <section className="businessCard-container">
            <h1>Temporary Title</h1>
            
        </section>
    )
}