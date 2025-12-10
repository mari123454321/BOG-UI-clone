import type { Currency } from "../dashboard/MainPageInfo";

export const myAccountsInfo: myAccountsInfoType[] = [
  {
    id: 1,
    iban: "SK67 1713 0725 7577 3724 9654",
    isFavorite: true,
    amounts: {
      lari: 4792.3,
      dollar: 18.94,
      euro: 33.76,
      pound: 18.44
    },
    backgroundImg: "https://ibank.bog.ge/assets/images/cards/backgrounds/card_gradient_shekvetili/3.png"
  },
  {
    id: 2,
    iban: "FR28 9384 3753 87IC 3J10 LMR2 R44",
    isFavorite: false,
    amounts: {
      lari: 7991.98,
      dollar: 7.5,
      euro: 92.48,
      pound: 7.11
    },
    backgroundImg: "https://wallpapers.com/images/high/pastel-colors-background-0nb7lvbmzwc2mk6z.webp"
  }
];
export const currencyArray: Currency[] = ["lari", "dollar", "euro", "pound"];

export type myAccountsInfoType = {
  id: number;
  iban: string;
  isFavorite: boolean;
  amounts: Record<Currency, number>;
  backgroundImg?: string;
};
