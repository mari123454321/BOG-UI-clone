import { useLanguage } from "../context/LanguageContext" 
//type this

const translations = {
    Geo: {
        login:{
            title: "ბიზნეს მენეჯერში შესვლა",
            text: "შეიყვანეთ, ან აღადგინეთ თქვენი ბიზნეს ინტერნეტბანკის მომხმარებლის სახელი და პაროლი",
            icon: "+",    
        },
        register:{
            title: "ბიზნეს მენეჯერში რეგისტრაცია",
            text: "თუ ჯერ არ ხართ საქართველოს ბანკის ბიზნეს მომხმარებელი, შეგიძლიათ მომენტალურად გახსნათ ანგარიში",
            icon: "+",   
        }
        
    },
    Eng: {
        login:{
            title: "Enter the Business Manager",
            text: "Enter or restore your Business Internet Banking login and password",
            icon: "+",    
        },
        register:{
            title: "Registration in the Business Manager",
            text: "If you are not already a Bank of Georgia business customer, you can instantly open an account",
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