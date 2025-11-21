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
