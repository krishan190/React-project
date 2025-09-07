import { useState } from "react";
import Endorsements from "./tabs/Endorsements";
import AutoEscalations from "./tabs/AutoEscalations";
import CDBalance from "./tabs/CDBalance";
import Documents from "./tabs/Documents";
import ClaimsStatus from "./tabs/ClaimsStatus";
import Reports from "./tabs/Reports";

export default function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("Endorsements");

  const tabs = [
    "Endorsements",
    "Auto Escalations",
    "CD Balance",
    "Documents",
    "Claims Status",
    "Reports",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Endorsements":
        return <Endorsements />;
      case "Auto Escalations":
        return <AutoEscalations />;
      case "CD Balance":
        return <CDBalance />;
      case "Documents":
        return <Documents />;
      case "Claims Status":
        return <ClaimsStatus />;
      case "Reports":
        return <Reports />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Tabs */}
      <nav className="flex w-full bg-black rounded-xl overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-6 py-1 font-semibold text-center transition ${activeTab === tab
              ? "mx-1 my-1 rounded bg-red-600 text-white"
              : "text-white hover:bg-red-700 rounded mx-1 my-1"
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="mt-5 shadow-md rounded-b-xl border-black-300">{renderTabContent()}</div>

      {/* Tab Content */}
    </>
  );
}
