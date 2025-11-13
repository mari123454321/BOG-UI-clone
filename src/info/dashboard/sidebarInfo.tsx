import type { ReactNode } from "react";
export type SubMenuItem = {
  name: string;
  path: string;
};

export type SidebarItem = {
  name: string;
  path: string;
  icon: ReactNode;             
  submenu?: SubMenuItem[]; 
};

export type SidebarItemsByLang = {
  Geo: SidebarItem[];
  Eng: SidebarItem[];
};
const houseIcon = (<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="navbar-icon navbar-icon-house"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
)
const mySpaceIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-home-heart"><path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>;
const arrowLeftRightIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-arrow-left-right"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>)
const georgianLariIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-georgian-lari"><path d="M11.5 21a7.5 7.5 0 1 1 7.35-9"/><path d="M13 12V3"/><path d="M4 21h16"/><path d="M9 12V3"/></svg>);
const walletCardsIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-wallet-cards"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/></svg>);
const circlePercentIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-circle-percent"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></svg>);
const creditCardIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>);
const banknoteArrowUpIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-banknote-arrow-up"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="M18 12h.01"/><path d="M19 22v-6"/><path d="m22 19-3-3-3 3"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/></svg>);
const badgePercentIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-badge-percent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></svg>);
const historyIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>);
const globeIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>);
const rocketIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>);
const ticketIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-ticket"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>);
const chartCandlestickIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-chart-candlestick"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/></svg>);
const ellipsisIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-icon navbar-icon-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>);

export const sidebarList: SidebarItemsByLang = {
  Geo: [
    { name: "მთავარი", path: "/main", icon: houseIcon },

    { name: "ჩემი სივრცე", path: "/my-space", icon: mySpaceIcon },

    {
      name: "გადარიცხვა",
      path: "/transfer",
      icon: arrowLeftRightIcon,
      submenu: [
        { name: "საკუთარ ანგარიშზე", path: "/transfer/own-account" },
        { name: "ქართულ ბანკში", path: "/transfer/georgian-banks" },
        { name: "კონტაქტებთან", path: "/transfer/contacts" },
        { name: "უცხოურ ბანკებში", path: "/transfer/foreign-banks" },
        { name: "ბიუჯეტში", path: "/transfer/treasury" },
        { name: "ვალუტის კონვერტაცია", path: "/transfer/currency-exchange" },
        { name: "უკუკონვერტაცია", path: "/transfer/fx-conversion" },
      ]
    },

    { name: "გადახდა", path: "/payment", icon: georgianLariIcon },

    { name: "ანგარიში და ბარათები", path: "/accounts-and-cards", icon: walletCardsIcon },

    { name: "სესხები", path: "/loans", icon: circlePercentIcon },

    { name: "საკრედიტო ბარათი", path: "/credit-cards", icon: creditCardIcon },

    { name: "ანაბრები", path: "/deposits", icon: banknoteArrowUpIcon },

    { name: "შეთავაზებები და განაცხადები", path: "/offers", icon: badgePercentIcon },

    { name: "ტრანზაქციების ისტორია", path: "/transactions", icon: historyIcon },

    {
      name: "გზავნილები",
      path: "/remittances",
      icon: globeIcon,
      submenu: [
        { name: "ყველა", path: "/remittances/all" },
        { name: "მიღება", path: "/remittances/receive" },
        { name: "გაგზავნა", path: "/remittances/send" },
      ]
    },

    {
      name: "ავტომატური სერვისები",
      path: "/automatic-services",
      icon: rocketIcon,
      submenu: [
        { name: "ყველა", path: "/automatic-services/all" },
        { name: "ავტომატური გადარიცხვა", path: "/automatic-services/auto-transfer" },
        { name: "ავტომატური გადახდა", path: "/automatic-services/auto-payment" },
      ]
    },

    { name: "ნაწილ-ნაწილ", path: "/buy-now-pay-later", icon: ticketIcon },

    { name: "ვალუტის კურსები", path: "/currencies", icon: chartCandlestickIcon },

    {
      name: "მეტი",
      path: "/more",
      icon: ellipsisIcon,
      submenu: [
        { name: "ლოიალურობა", path: "/more/loyalty-programs" },
        { name: "სასაჩუქრე ბარათები", path: "/more/gift-cards" },
        { name: "საბანკო ნაკრები", path: "/more/banking-set" },
      ]
    },
  ],

  Eng: [
    { name: "Main", path: "/main", icon: houseIcon },

    { name: "My Space", path: "/my-space", icon: mySpaceIcon },

    {
      name: "Transfer",
      path: "/transfer",
      icon: arrowLeftRightIcon,
      submenu: [
        { name: "To Own Account", path: "/transfer/own-account" },
        { name: "In Georgian Banks", path: "/transfer/georgian-banks" },
        { name: "To Contacts", path: "/transfer/contacts" },
        { name: "In Foreign Banks", path: "/transfer/foreign-banks" },
        { name: "To Treasury", path: "/transfer/treasury" },
        { name: "Currency Exchange", path: "/transfer/currency-exchange" },
        { name: "FX Conversion", path: "/transfer/fx-conversion" },
      ]
    },

    { name: "Payment", path: "/payment", icon: georgianLariIcon },

    { name: "Account and Cards", path: "/accounts-and-cards", icon: walletCardsIcon },

    { name: "Loans", path: "/loans", icon: circlePercentIcon },

    { name: "Credit Cards", path: "/credit-cards", icon: creditCardIcon },

    { name: "Deposits", path: "/deposits", icon: banknoteArrowUpIcon },

    { name: "Offers and Applications", path: "/offers", icon: badgePercentIcon },

    { name: "Transaction History", path: "/transactions", icon: historyIcon },

    {
      name: "Remittances",
      path: "/remittances",
      icon: globeIcon,
      submenu: [
        { name: "All", path: "/remittances/all" },
        { name: "Receive", path: "/remittances/receive" },
        { name: "Send", path: "/remittances/send" },
      ]
    },

    {
      name: "Automatic Services",
      path: "/automatic-services",
      icon: rocketIcon,
      submenu: [
        { name: "All", path: "/automatic-services/all" },
        { name: "Automatic Transfer", path: "/automatic-services/auto-transfer" },
        { name: "Automatic Payment", path: "/automatic-services/auto-payment" },
      ]
    },

    { name: "Buy Now Pay Later", path: "/buy-now-pay-later", icon: ticketIcon },

    { name: "Currencies", path: "/currencies", icon: chartCandlestickIcon },

    {
      name: "More",
      path: "/more",
      icon: ellipsisIcon,
      submenu: [
        { name: "Loyalty Programs", path: "/more/loyalty-programs" },
        { name: "Gift Cards", path: "/more/gift-cards" },
        { name: "Banking Set", path: "/more/banking-set" },
      ]
    },
  ]
};
