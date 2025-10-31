import businessManagerEnterIcon from "./images/businessManagerEnterIcon.png"
import businessManagerRegisterIcon from "./images/businessManagerRegisterIcon.png"

type OptionContent = {
    id: number    
    title: string
    text: string
    icon: string 
};

export type Options = {
    header: string
    login: OptionContent
    register: OptionContent
    open?:OptionContent
}
export type InfoType = {
    Geo: Options
    Eng: Options
}

// TYPE THIS
export const infoB : InfoType= {
    Geo: {
        header: "ციფრული მომსახურება თქვენი ბიზნესისთვის",
        login:{
            id:1,
            title: "ინტერნეტბანკში შესვლა",
            text: "შეიყვანეთ ან აღადგინეთ მომხმარებლის სახელი და პაროლი",
            icon: businessManagerEnterIcon    
        },
        register:{
            id: 2,
            title: "ინტერნეტბანკში რეგისტრაცია",
            text: "დარეგისტრირდით ბიზნეს ინტერნეტბანკში ონლაინ",
            icon: businessManagerEnterIcon   
        },
        open:{
            id: 3,
            title: "პირველი ანგარიშის გახსნა",
            text: "გახდით საქართველოს ბანკის ბიზნეს მომხმარებელი ონლაინ",
            icon: businessManagerEnterIcon   
        }
        
    },
    Eng: {
        header: "Digital service for your business",
        login:{
            id: 1,
            title: "Log into Internet Banking",
            text: "Enter or recover your username or password",
            icon: businessManagerEnterIcon    
        },
        register:{
            id: 2,
            title: "Internet Banking registration",
            text: "Register in Business Internet Banking online",
            icon: businessManagerEnterIcon   
        },
        open:{
            id: 3,
            title: "Open your first account",
            text: "Become Bank of Georgia’s business customer online",
            icon: businessManagerEnterIcon
        }
    }
}

export const infoBM : InfoType= {
    Geo: {
        header: "მართეთ ბიზნესი ერთი სივრციდან",
        login: {
            id: 1,
            title: "ბიზნეს მენეჯერში შესვლა",
            text: "შეიყვანეთ, ან აღადგინეთ თქვენი ბიზნეს ინტერნეტბანკის მომხმარებლის სახელი და პაროლი",
            icon: businessManagerEnterIcon
        },
        register: {
            id: 2,
            title: "ბიზნეს მენეჯერში რეგისტრაცია",
            text: "თუ ჯერ არ ხართ საქართველოს ბანკის ბიზნეს მომხმარებელი, შეგიძლიათ მომენტალურად გახსნათ ანგარიში",
            icon: businessManagerRegisterIcon
        }

    },
    Eng: {
        header:"Manage business from one space",
        login: {
            id: 1,
            title: "Enter the Business Manager",
            text: "Enter or restore your Business Internet Banking login and password",
            icon: businessManagerEnterIcon
        },
        register: {
            id: 2,
            title: "Registration in the Business Manager",
            text: "If you are not already a Bank of Georgia business customer, you can instantly open an account",
            icon: businessManagerRegisterIcon
        }
    }
}


