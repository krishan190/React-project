// components/tabs/Endorsements.jsx
import { endorsementSummary } from "../../constant/constant";
import EndorsementCard from "../EndorsementCard";

export default function Endorsements() {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {endorsementSummary.map((summary, index) => (
                <EndorsementCard
                    key={index}
                    summary={summary}
                />
            ))}
        </div>

    );
}
