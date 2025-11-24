import LoyaltyCard from "../../components/Dashboard/Main/LoyaltyCard";
import AccountsAndCardsCardMySpace from "../../components/Dashboard/My space/AccountsAndCardsCardMySpace";

export default function MySpace() {
    return (
        <main className="">
            <div className="cards-container ">
                <AccountsAndCardsCardMySpace ammount={12500} currency="$" />
                <LoyaltyCard />
                
            </div>
        </main>
    )
}