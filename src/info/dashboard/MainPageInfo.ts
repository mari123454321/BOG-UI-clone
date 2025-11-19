export type MainPageTopType = {
  Geo: {
    title: string;
    amountInLari: number;
    amountInDollar: number;
    amountInEuro: number;
    amountInPound: number;
    rearrangeSectionsTitle: string;
  };
  Eng: {
    title: string;
    amountInLari: number;
    amountInDollar: number;
    amountInEuro: number;
    amountInPound: number;
    rearrangeSectionsTitle: string;
  };
};

export const mainPageTop: MainPageTopType = {
  Geo: {
    title: "სულ ხელმისაწვდომი თანხა",
    amountInLari: 807.5,
    amountInDollar: 298.2,  
    amountInEuro: 257.6,      
    amountInPound: 226.9,     
    rearrangeSectionsTitle: "სექციების გადალაგება"
  },
  Eng: {
    title: "Total Available Amount",
    amountInLari: 807.5,
    amountInDollar: 298.2,
    amountInEuro: 257.6,
    amountInPound: 226.9,
    rearrangeSectionsTitle: "REARRANGE SECTIONS"
  }
};
