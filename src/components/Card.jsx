export default function Card({ title, count, subText, color }) {
    return (
        <div
            className={`rounded-xl shadow-sm p-5 flex flex-col justify-between border ${color ? `border-${color}-300 bg-${color}-50` : "border-gray-200 bg-white"
                }`}
        >
            <h2 className="font-semibold text-gray-700">{title}</h2>
            <p className="text-3xl font-bold mt-4 text-red-500">{count}</p>
            {subText && <p className="text-sm text-gray-500 mt-2">{subText}</p>}
        </div>
    );
}
