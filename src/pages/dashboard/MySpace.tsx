import PensionCard from "../../components/common/PensionCard";
import LoyaltyCard from "../../components/Dashboard/Main/LoyaltyCard";
import AccountsAndCardsCardMySpace from "../../components/Dashboard/My space/AccountsAndCardsCardMySpace";
import MyBankingSetCard from "../../components/Dashboard/My space/MyBankingSetCard";

export default function MySpace() {
    return (
        <main className="">
            <div className="cards-container ">
                <AccountsAndCardsCardMySpace ammount={12500} currency="$" />
                <PensionCard/>
                <LoyaltyCard />
                <MyBankingSetCard/>
            </div>
        </main>
    )
}