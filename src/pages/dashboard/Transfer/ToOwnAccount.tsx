import { useEffect, useState } from "react";
import TransferPageCardLayout from "../../../components/common/TransferPageCardLayout";
import AccountSelector from "../../../components/Dashboard/transactions/AccountSelector";
import { useLanguage } from "../../../context/LanguageContext";
import useGetRate from "../../../hooks/useGetRate";
import { myAccountsInfo } from "../../../info/banking info/myAccountsInfo";
import {
    currencySymbol,
    type Currency,
} from "../../../info/dashboard/MainPageInfo";
import AmountConvertorForms, { convertAmount } from "./AmountConvertorForms";
import NominationForm from "./NominationForm";

export type ChosenAccountType = {
    accountID: number;
    currency: Currency;
};

export const currencyCodes: Record<Currency, string> = {
    lari: "GEL",
    dollar: "USD",
    euro: "EUR",
    pound: "GBP",
};

export default function ToOwnAccount() {
    const { language } = useLanguage();

    const [sell, setSell] = useState<ChosenAccountType>({
        accountID: 0,
        currency: "lari",
    });
    const [buy, setBuy] = useState<ChosenAccountType>({
        accountID: 1,
        currency: "lari",
    });
    const [purposeMessage, setPurposeMessage] = useState<string>(
        language === "Geo" ? "კონვერტაცია" : "Conversion"
    );

    const sellCurrency = currencyCodes[sell.currency];
    const buyCurrency = currencyCodes[buy.currency];
    const exchangeRate = useGetRate(sellCurrency, buyCurrency);

    // Recalculates sell amount from buy when rate changes and sell is outdated
    const [sellAmount, setSellAmount] = useState<number | "">("")
    const [sellOutdated, setSellOutdated] = useState<boolean>(false);
    useEffect(() => {
        if (!exchangeRate || !sellOutdated) return;
        setSellAmount(convertAmount(buyAmount, 1 / exchangeRate));
    }, [exchangeRate, sellOutdated])

    // Recalculates buy amount from sell when rate changes and buy is outdated
    const [buyAmount, setBuyAmount] = useState<number | "">("")
    const [buyOutdated, setBuyOutdated] = useState<boolean>(false);
    useEffect(() => {
        if (!exchangeRate || !buyOutdated) return;
        setBuyAmount(convertAmount(sellAmount, exchangeRate));
    }, [exchangeRate, buyOutdated])

    return (
        <TransferPageCardLayout
            amount={sellAmount || 0}
            currency={currencySymbol[sell.currency]}
        >
            <div className="to-own-account-layout *:col-start-1">
                <AccountSelector
                    label={language === "Geo" ? "საიდან" : "From"}
                    AccountsInfo={myAccountsInfo}
                    chosenAccount={sell}
                    setChosenAccount={chosenAccountType => {
                        setSell(chosenAccountType);
                        setBuyOutdated(true)
                    }}
                />

                <AccountSelector
                    label={language === "Geo" ? "სად" : "Where"}
                    AccountsInfo={myAccountsInfo}
                    chosenAccount={buy}
                    setChosenAccount={chosenAccountType => {
                        setBuy(chosenAccountType);
                        setSellOutdated(true)
                    }}
                    btnToSkip={sell.currency}
                />

                <AmountConvertorForms
                    sellCurrency={sell.currency}
                    buyCurrency={buy.currency}
                    exchangeRate={exchangeRate}

                    sellAmountInput={sellAmount} setSellAmountInput={setSellAmount}
                    buyAmountInput={buyAmount} setBuyAmountInput={setBuyAmount}
                />
                {/* TODO: add exchange rate display */}
                <pre>{JSON.stringify({ sellCurrency, buyCurrency, exchangeRate }, null, 2)}</pre>
                <NominationForm
                    inputLabel={language === "Geo" ? "დანიშნულება" : "Nomination"}
                    inputValue={purposeMessage}
                    setInputValue={setPurposeMessage}
                />
            </div>
        </TransferPageCardLayout>
    );
}
