import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NavigationTabs from "./components/NavigationTabs";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          <Dashboard />
          <NavigationTabs />
        </div>
      </div>
    </div>
  );
}

export default App;
