import { useEffect, useState } from "react";
import useDebouncedValue from "./useDebouncedValue";

export default function useGetRate(baseCurrency: string, currencyTo: string) {
  const [rate, setRate] = useState<number>();
  const debouncedBaseCurrency = useDebouncedValue(baseCurrency, 300)
  
  
  useEffect(() => {
    async function fetchRate() {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_API_KEY
          }/pair/${debouncedBaseCurrency}/${currencyTo}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rate");
        }

        const data = await response.json();
        console.log(data);
        setRate(data.conversion_rate);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRate();
  }, [debouncedBaseCurrency]);
  return rate
}
