import businessManagerEnterIcon from "../images/businessManagerEnterIcon.png";
import businessManagerRegisterIcon from "../images/businessManagerRegisterIcon.png";

type OptionContent = {
  id: number;
  title: string;
  text: string;
  icon: string;
};

export type Options = {
  header: string;
  login: OptionContent;
  register: OptionContent;
  open?: OptionContent;
};
export type InfoType = {
  Geo: Options;
  Eng: Options;
};

// TYPE THIS
export const infoB: InfoType = {
  Geo: {
    header: "ციფრული მომსახურება თქვენი ბიზნესისთვის",
    login: {
      id: 1,
      title: "ინტერნეტბანკში შესვლა",
      text: "შეიყვანეთ ან აღადგინეთ მომხმარებლის სახელი და პაროლი",
      icon: businessManagerEnterIcon,
    },
    register: {
      id: 2,
      title: "ინტერნეტბანკში რეგისტრაცია",
      text: "დარეგისტრირდით ბიზნეს ინტერნეტბანკში ონლაინ",
      icon: businessManagerEnterIcon,
    },
    open: {
      id: 3,
      title: "პირველი ანგარიშის გახსნა",
      text: "გახდით საქართველოს ბანკის ბიზნეს მომხმარებელი ონლაინ",
      icon: businessManagerEnterIcon,
    },
  },
  Eng: {
    header: "Digital service for your business",
    login: {
      id: 1,
      title: "Log into Internet Banking",
      text: "Enter or recover your username or password",
      icon: businessManagerEnterIcon,
    },
    register: {
      id: 2,
      title: "Internet Banking registration",
      text: "Register in Business Internet Banking online",
      icon: businessManagerEnterIcon,
    },
    open: {
      id: 3,
      title: "Open your first account",
      text: "Become Bank of Georgia’s business customer online",
      icon: businessManagerEnterIcon,
    },
  },
};

export const infoBM: InfoType = {
  Geo: {
    header: "მართეთ ბიზნესი ერთი სივრციდან",
    login: {
      id: 1,
      title: "ბიზნეს მენეჯერში შესვლა",
      text: "შეიყვანეთ, ან აღადგინეთ თქვენი ბიზნეს ინტერნეტბანკის მომხმარებლის სახელი და პაროლი",
      icon: businessManagerEnterIcon,
    },
    register: {
      id: 2,
      title: "ბიზნეს მენეჯერში რეგისტრაცია",
      text: "თუ ჯერ არ ხართ საქართველოს ბანკის ბიზნეს მომხმარებელი, შეგიძლიათ მომენტალურად გახსნათ ანგარიში",
      icon: businessManagerRegisterIcon,
    },
  },
  Eng: {
    header: "Manage business from one space",
    login: {
      id: 1,
      title: "Enter the Business Manager",
      text: "Enter or restore your Business Internet Banking login and password",
      icon: businessManagerEnterIcon,
    },
    register: {
      id: 2,
      title: "Registration in the Business Manager",
      text: "If you are not already a Bank of Georgia business customer, you can instantly open an account",
      icon: businessManagerRegisterIcon,
    },
  },
};

export const footerInfo = {
  Geo: {
    topText: "© 1997 - 2025 საქართველოს ბანკი",
    quickLinks: {
      conditions: "პირობები",
      messages: "შეტყობინებები",
      hotLine: "ცხელი ხაზი",
      securityCenter: "უსაფრთხოების ცენტრი",
      privacyNotice: "შეტყობინება მონაცემთა დამუშავების თაობაზე",
    }
  },
  Eng: {
    topText: "© 1997 - 2025 Bank Of Georgia",
    quickLinks: {
      conditions: "Conditions",
      messages: "Notifications",
      hotLine: "Hotline",
      securityCenter: "Security center",
      privacyNotice: "Privacy Notice",
    }
  },
};


//SWITCH DROPDOWN

export type DigitalChanelsInfoType = {
  Geo: DigitalInfo;
  Eng: DigitalInfo;
};
type DigitalInfo = {
  title: string
  content: string[]
  color: string[]
}
export const digitalChanelsinfo: DigitalChanelsInfoType = {
  Geo:{
    title: "ციფრული არხები",
    content: ["ინტერნეტბანკი", "ბიზნეს ინტერნეტბანკი", "ბიზნეს მენეჯერი", "გადახდები"],
    color: ["#ff600a", "#5a646f", "#1a1a1a", "#ff8b66"]
  },
  Eng:{
    title: "Digital channels",
    content: ["Internet Bank", "Business Internet Bank", "Business Manager", "Payments"],
    color: ["#ff600a", "#5a646f", "#1a1a1a", "#ff8b66"]
  }
   
}
export const websitesInfo: WebsitesInfoType = {
  Geo:{
    title: "ვებგვერდები",
    links:["Bog.ge", "Business.ge", "Solo.Ge", "wealth.ge"],
    content: ["ფიზიკური პირისთვის", "საქართველოს ბანკის ბიზნესი", "პრემიუმ საბანკო მომსახურება", "დაგროვილი ქონების მარტვა"],
  },
  Eng:{
    title: "Websites",
    links: ["Bog.ge", "Business.ge", "Solo.Ge", "wealth.ge"],
    content: ["Retail Banking", "Bank of Georgia Business", "Premium banking and lyfestyle", "Wealth management"],
  }
   
}
export type WebsitesInfoType = {
  Geo: WebsitesInfo;
  Eng: WebsitesInfo;
};
type WebsitesInfo = {
  title: string
  links: string[]
  content: string[]
}

// PROFILE DROPDOWN
export type Profile={
  username: string
  changeLang: string
  myProfile: string
  exit: string
}

type ProfileDropDownType = {
  Geo: Profile;
  Eng: Profile;
};

export const ProfileDropDownInfo:ProfileDropDownType={
  Geo:{
    username: "მარიამ სიხუაშვილი",
    changeLang: "ენის შეცვლა",
    myProfile: "ჩემი პროფილი",
    exit: "გამოსვლა"
  },
  Eng:{
    username: "MARIAM SIKHUASHVILI",
    changeLang: "Change Language",
    myProfile: "My profile",
    exit: "Log Out"
  }
}