import { Smile } from "lucide-react";
import {  type JSX } from "react";
export type Categories = {
    Food: JSX.Element;
    Grocery: JSX.Element;
    Supermarkets: JSX.Element;
    AlcoholShops: JSX.Element;
    Transport: JSX.Element;
    Utilities: JSX.Element;
    Shopping: JSX.Element;
    Entertainment: JSX.Element;
    HealthAndCare: JSX.Element;
    TaxesAndFees: JSX.Element;
    BankingOperations: JSX.Element;
    Education: JSX.Element;
    Travel: JSX.Element;
    Home: JSX.Element;
    OtherExpenses: JSX.Element;
    Incomes: JSX.Element;
}
export const categoryIcons:Categories = {
  Food: <Smile />,
  Grocery: <Smile />,
  Supermarkets: <Smile />,
  AlcoholShops: <Smile />,
  Transport: <Smile />,
  Utilities: <Smile />,
  Shopping: <Smile />,
  Entertainment: <Smile />,
  HealthAndCare: <Smile />,
  TaxesAndFees: <Smile />,
  BankingOperations: <Smile />,
  Education: <Smile />,
  Travel: <Smile />,
  Home: <Smile />,
  OtherExpenses: <Smile />,
  Incomes: <Smile />
} 
export type CategoryKey = keyof Categories;
export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: string;
  amount: number;
  currency: string;
  category: CategoryKey;
};
export const transactions: { Geo: Transaction[]; Eng: Transaction[] } = {
  Geo: [
    {
      id: "T1",
      date: "24 Nov, 2025",
      description: "SPAR, თბილისი, ი. ჭავჭავაძის გამზ. 54",
      type: "გადახდა",
      amount: -3.74,
      currency: "₾",
      category: "Grocery"
    },
    {
      id: "T2",
      date: "24 Nov, 2025",
      description:
        "გადახდა - 0.20₾; თბილისის ავტობუსი - მარშრუტი 354; დრო: 08:42; ბარათის № ****3277",
      type: "გადახდა",
      amount: -0.20,
      currency: "₾",
      category: "Transport"
    },
    {
      id: "T3",
      date: "21 Nov, 2025",
      description: "SPAR, თბილისი, ი. ჭავჭავაძის გამზ. 54",
      type: "გადახდა",
      amount: -3.74,
      currency: "₾",
      category: "Grocery"
    },
    {
      id: "T4",
      date: "21 Nov, 2025",
      description:
        "გადახდა - 0.20₾; თბილისის ავტობუსი - მარშრუტი 307; დრო: 18:25; ბარათის № ****3277",
      type: "გადახდა",
      amount: -0.20,
      currency: "₾",
      category: "Transport"
    },
    {
      id: "T5",
      date: "18 Nov, 2025",
      description: "Wendy's, თბილისი, რუსთაველის გამზირი",
      type: "გადახდა",
      amount: -12.90,
      currency: "₾",
      category: "Food"
    },
    {
      id: "T6",
      date: "17 Nov, 2025",
      description: "Goodwill, თბილისი, დBroadway 1",
      type: "გადახდა",
      amount: -45.30,
      currency: "₾",
      category: "Supermarkets"
    },
    {
      id: "T7",
      date: "16 Nov, 2025",
      description: "Wolt • შეკვეთა",
      type: "გადახდა",
      amount: -22.50,
      currency: "₾",
      category: "Food"
    },
    {
      id: "T8",
      date: "15 Nov, 2025",
      description: "SOCAR • საწვავი",
      type: "გადახდა",
      amount: -30.00,
      currency: "₾",
      category: "Transport"
    },
    {
      id: "T9",
      date: "14 Nov, 2025",
      description: "PSP ფარმაცია",
      type: "გადახდა",
      amount: -18.40,
      currency: "₾",
      category: "HealthAndCare"
    },
    {
      id: "T10",
      date: "12 Nov, 2025",
      description: "საქართველოს ბანკი • საკომისიო",
      type: "გადახდა",
      amount: -1.00,
      currency: "₾",
      category: "BankingOperations"
    },
    {
      id: "T11",
      date: "11 Nov, 2025",
      description: "შეკვეთა • Amazon (მიწოდება)",
      type: "გადახდა",
      amount: -75.90,
      currency: "₾",
      category: "Shopping"
    },
    {
      id: "T12",
      date: "10 Nov, 2025",
      description: "ხელფასის ჩარიცხვა",
      type: "შემოსავალი",
      amount: 1250.00,
      currency: "₾",
      category: "Incomes"
    }
  ],

  Eng: [
    {
      id: "T1",
      date: "24 Nov, 2025",
      description: "SPAR, Tbilisi, I. Chavchavadze Ave 54",
      type: "Payment",
      amount: -3.74,
      currency: "₾",
      category: "Grocery"
    },
    {
      id: "T2",
      date: "24 Nov, 2025",
      description:
        "Payment - GEL0.20; Tbilisi Bus - route 354; Time: 08:42; Card ****3277",
      type: "Payment",
      amount: -0.20,
      currency: "₾",
      category: "Transport"
    },
    {
      id: "T3",
      date: "21 Nov, 2025",
      description: "SPAR, Tbilisi, I. Chavchavadze Ave 54",
      type: "Payment",
      amount: -3.74,
      currency: "₾",
      category: "Grocery"
    },
    {
      id: "T4",
      date: "21 Nov, 2025",
      description:
        "Payment - GEL0.20; Tbilisi Bus - route 307; Time: 18:25; Card ****3277",
      type: "Payment",
      amount: -0.20,
      currency: "₾",
      category: "Transport"
    },
    {
      id: "T5",
      date: "18 Nov, 2025",
      description: "Wendy's, Tbilisi, Rustaveli Ave",
      type: "Payment",
      amount: -12.90,
      currency: "₾",
      category: "Food"
    },
    {
      id: "T6",
      date: "17 Nov, 2025",
      description: "Goodwill Supermarket",
      type: "Payment",
      amount: -45.30,
      currency: "₾",
      category: "Supermarkets"
    },
    {
      id: "T7",
      date: "16 Nov, 2025",
      description: "Wolt • Order",
      type: "Payment",
      amount: -22.50,
      currency: "₾",
      category: "Food"
    },
    {
      id: "T8",
      date: "15 Nov, 2025",
      description: "SOCAR • Fuel",
      type: "Payment",
      amount: -30.00,
      currency: "₾",
      category: "Transport"
    },
    {
      id: "T9",
      date: "14 Nov, 2025",
      description: "PSP Pharmacy",
      type: "Payment",
      amount: -18.40,
      currency: "₾",
      category: "HealthAndCare"
    },
    {
      id: "T10",
      date: "12 Nov, 2025",
      description: "Bank Fee",
      type: "Payment",
      amount: -1.00,
      currency: "₾",
      category: "BankingOperations"
    },
    {
      id: "T11",
      date: "11 Nov, 2025",
      description: "Amazon • Delivery",
      type: "Payment",
      amount: -75.90,
      currency: "₾",
      category: "Shopping"
    },
    {
      id: "T12",
      date: "10 Nov, 2025",
      description: "Salary Deposit",
      type: "Income",
      amount: 1250.00,
      currency: "₾",
      category: "Incomes"
    }
  ]
};
