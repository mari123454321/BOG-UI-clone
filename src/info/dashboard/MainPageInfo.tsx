import type { JSX } from "react";

export type MainPageTopType = {
  Geo: {
    title: string;
    amount: {
      lari: number;
      dollar: number;
      euro: number;
      pound: number;
    };
    rearrangeSectionsTitle: string;
  };
  Eng: {
    title: string;
    amount: {
      lari: number;
      dollar: number;
      euro: number;
      pound: number;
    };
    rearrangeSectionsTitle: string;
  };
};

export const mainPageTop: MainPageTopType = {
  Geo: {
    title: "სულ ხელმისაწვდომი თანხა",
    amount: {
      lari: 807.5,
      dollar: 298.2,
      euro: 257.6,
      pound: 226.9,
    },
    rearrangeSectionsTitle: "სექციების გადალაგება",
  },
  Eng: {
    title: "Total Available Amount",
    amount: {
      lari: 807.5,
      dollar: 298.2,
      euro: 257.6,
      pound: 226.9,
    },
    rearrangeSectionsTitle: "Rearrange Sections",
  },
};

export type Currency = "lari" | "dollar" | "euro" | "pound";
export const currencySymbol: Record<Currency, string> = {
  lari: "₾",
  dollar: "$",
  euro: "€",
  pound: "£",
};

// ACCOUNTS AND CARDS
export type AccountsCardsInfoType = {
  Geo: {
    title: string;
    name: string;
    currency: string;
    amount: string;
    universalAccount: string;
    img: string
  };
  Eng: {
    title: string;
    name: string;
    currency: string;
    amount: string;
    universalAccount: string;
    img: string
  };
};

export const accountsCardsInfo: AccountsCardsInfoType = {
  Geo: {
    title: "ანგარიშები და ბარათები",
    name: "სახელი",
    currency: "ვალუტა",
    amount: "თანხა",
    universalAccount: "უნივერსალური ანგარიში",
    img: "../../images/PINKCARD.png"
  },
  Eng: {
    title: "ACCOUNTS AND CARDS",
    name: "NAME",
    currency: "CURRENCY",
    amount: "AMOUNT",
    universalAccount: "UNIVERSAL ACCOUNT",
    img: "../../images/PINKCARD.png"
  },
};


// LOYALTY
export type LoyaltyText = {
  title: string;
  plusPoints: string;
};

export type LoyaltyNumbers = {
  plusPoints: number;
  plusPointsInLari: number;
};

export type LoyaltyInfoType = {
  Geo: LoyaltyText;
  Eng: LoyaltyText;
  info: LoyaltyNumbers;
};

export const loyaltyInfo: LoyaltyInfoType = {
  Geo: {
    title: "ლოიალურობა",
    plusPoints: "PLUS ქულები",
  },
  Eng: {
    title: "LOYALTY PROGRAMS",
    plusPoints: "PLUS POINTS",
  },
  info: {
    plusPoints: 266,
    plusPointsInLari: 0.66,
  }
};

//my templates

export type TemplateItem = {
  img: JSX.Element;
  templateTitle: string;
  type: string;
};

export type TemplatesInfoType = {
  Geo: {
    title: string;
    mobilePayments: string;
    more: string
  };
  Eng: {
    title: string;
    mobilePayments: string;
    more: string

  };
  info: TemplateItem[];
};


export const myTemplatesInfo: TemplatesInfoType = {
  Geo: {
    title: "ჩემი შაბლონები",
    mobilePayments: "მობილურზე ჩარიცხვა",
    more: "მეტის ნახვა"
  },
  Eng: {
    title: "MY TEMPLATES",
    mobilePayments: "Mobile payments",
    more: "Show more"
  },
  info: [
    {
      img: <img src="https://ibank.bog.ge/images/en/656327/A8354E47F358DF36B7238557E88B46CD/image.jpg" alt="magti" style={{ width: "48px", height: "48px", borderRadius: "50%" }} className="dashboard-cards-imgs" />,
      templateTitle: "ულიმიტო ინტერნეტი დღე-ღამე",
      type: "Mobile Top-Ups",
    },
    {
      img: <img src="https://ibank.bog.ge/images/ge/681706/06A1BB4C909B4E1638A27919D25536AC/image.jpg" alt="magti" style={{ width: "48px", height: "48px", borderRadius: "50%" }} />,
      templateTitle: "ულიმიტო",
      type: "Mobile Top-Ups",
    }, {
      img: <img src="https://ibank.bog.ge/images/en/656327/A8354E47F358DF36B7238557E88B46CD/image.jpg" alt="magti" style={{ width: "48px", height: "48px", borderRadius: "50%" }} />,
      templateTitle: "ულიმიტო ინტერნეტი დღე-ღამე",
      type: "Mobile Top-Ups",
    },
    {
      img: <img src="https://ibank.bog.ge/images/en/656327/A8354E47F358DF36B7238557E88B46CD/image.jpg" alt="magti" style={{ width: "48px", height: "48px", borderRadius: "50%" }} />,
      templateTitle: "ულიმიტო ინტერნეტი დღე-ღამე",
      type: "Mobile Top-Ups",
    }
  ],
};

