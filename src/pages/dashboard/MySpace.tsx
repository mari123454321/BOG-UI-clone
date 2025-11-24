import PensionCard from "../../components/common/PensionCard";
import LoyaltyCard from "../../components/Dashboard/Main/LoyaltyCard";
import AccountsAndCardsCardMySpace from "../../components/Dashboard/My space/AccountsAndCardsCardMySpace";
import RevenueServiceCard from "../../components/Dashboard/My space/RevenueServiceCard";
import BankingSetCard from "../../components/Dashboard/My space/BankingSetCard";

export default function MySpace() {
    return (
        <main className="">
            <div className="cards-container ">
                <AccountsAndCardsCardMySpace ammount={12500} currency="$" />
                <PensionCard/>
                <LoyaltyCard />
                <BankingSetCard />
                <RevenueServiceCard />
            </div>
        </main>
    )
}