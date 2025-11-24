import PensionCard from "../../components/common/PensionCard";
import LoyaltyCard from "../../components/Dashboard/Main/LoyaltyCard";
import AccountsAndCardsCardMySpace from "../../components/Dashboard/My space/AccountsAndCardsCardMySpace";
import RevenueServiceCard from "../../components/Dashboard/My space/RevenueServiceCard";
import BankingSetCard from "../../components/Dashboard/My space/BankingSetCard";
import CreditOffersCard from "../../components/common/CreditOffersCard";

export default function MySpace() {
    return (
        <main className="">
            <div className="cards-container ">
                <AccountsAndCardsCardMySpace ammount={807.5} currency="₾" />
                <LoyaltyCard />
                <PensionCard/>
                <CreditOffersCard/>
                <BankingSetCard />
                <RevenueServiceCard />
            </div>
        </main>
    )
}