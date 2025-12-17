import { useEffect, useState } from "react";

export default function useGetRate(
  baseCurrency: string,
  quoteCurrency: string
) {
  const [rate, setRate] = useState<number>();

  useEffect(() => {
    async function fetchRate() {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_API_KEY
          }/pair/${baseCurrency}/${quoteCurrency}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rate");
        }

        const data = await response.json();
        // console.log(
        //   "DEBUG useGetRate",
        //   baseCurrency,
        //   quoteCurrency,
        //   data.conversion_rate
        // );
        setRate(data.conversion_rate);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRate();
  }, [baseCurrency, quoteCurrency]);
  return rate;
}
