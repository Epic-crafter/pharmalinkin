// pages/index.tsx
import Sidebar from "../components/Sidebar";
import ApplicationList from "../components/AppList";
import Filters from "../components/Filters";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Main content area */}
      <main className="flex-grow p-6">
        <div className="flex space-x-6">
          <div className="flex-grow">
            <ApplicationList />
          </div>

          <div className="w-64">
            <Filters />
          </div>
        </div>
      </main>
    </div>
  );
}

