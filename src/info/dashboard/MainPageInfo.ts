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
