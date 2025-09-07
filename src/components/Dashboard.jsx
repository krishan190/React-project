import Card from "./Card";

export default function Dashboard() {
  const cards = [
    { title: "Pending Endorsements", count: "193", subText: "+12 from last week", color: "red" },
    { title: "Active Claims", count: "264", subText: "55 require attention" ,color:"black"},
    { title: "CD Balance Alert", count: "2", subText: "Clients with deficit", color: "red" },
    { title: "Red Flags", count: "4", subText: "Require immediate action" ,color:"black" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
  
      
    </div>
  );
}
