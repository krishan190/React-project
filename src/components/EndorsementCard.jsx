// components/EndorsementCard.jsx
export default function EndorsementCard({ summary }) {
    const formatCurrency = (val) =>
        `₹${(val / 100000).toFixed(1)}L`; // Example: convert to Lakhs

    return (
        <div
            className={`rounded-xl border-2 p-4 flex flex-col justify-between shadow-md transition-all hover:shadow-xl cursor-pointer 
      ${summary.priority === "High"
                    ? "border-red-500 bg-red-50"
                    : "border-red-300 bg-pink-50"
                }`}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-sm font-medium text-gray-900 leading-tight">
                    {summary.title}
                </h2>
                <span
                    className={`px-2 py-0.5 text-xs rounded-full font-semibold ${summary.priority === "High"
                        ? "bg-red-600 text-white"
                        : "bg-red-200 text-red-800"
                        }`}
                >
                    {summary.priority}
                </span>
            </div>

            {/* Count */}
            <div
                className={`text-3xl font-bold mb-3 ${summary.priority === "High" ? "text-red-600" : "text-black"
                    }`}
            >
                {summary.count}
            </div>

            {/* Details */}
            <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">TAT:</span>
                    <span className="font-medium">{summary.avgTAT} days</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Lives:</span>
                    <span className="font-medium">{summary.lives}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Premium:</span>
                    <span className="font-medium">{formatCurrency(summary.premium)}</span>
                </div>
            </div>

            {/* Member Changes */}
            <div className="pt-3 border-t mt-3">
                <div className="text-xs font-semibold mb-1 text-gray-900">
                    Member Changes:
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                        <div className="font-bold text-green-600">
                            {summary.memberAddition}
                        </div>
                        <div className="text-gray-500">Add</div>
                    </div>
                    <div>
                        <div className="font-bold text-red-600">
                            {summary.memberDeletion}
                        </div>
                        <div className="text-gray-500">Del</div>
                    </div>
                    <div>
                        <div className="font-bold text-blue-600">
                            {summary.memberUpdation}
                        </div>
                        <div className="text-gray-500">Upd</div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button className="mt-4 w-full rounded-md bg-black text-white py-2 text-xs font-semibold hover:bg-red-600">
                View Details
            </button>
        </div>
    );
}
