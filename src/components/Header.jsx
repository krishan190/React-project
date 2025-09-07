export default function Header() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-black text-white p-6 shadow-lg">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Insurance Broker Dashboard</h1>
            <p className="text-red-100">Employee Benefits Portal Management</p>
          </div>

          <div className="flex items-center gap-4">
            <select className="w-48 bg-white text-black px-2 py-1 rounded-md hover:bg-gray-100">
              <option value="all">All Clients</option>
              <option value="techcorp">TechCorp Ltd</option>
              <option value="retailchain">RetailChain</option>
              <option value="financeinc">FinanceInc</option>
            </select>

            <button className="bg-white text-black px-2 py-1 rounded-md hover:bg-gray-200">
              🔔 Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
