import Header from "./Header";
import JobsInternshipsTabs from "./Tabs";
import Pagination from "./Pagination";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <JobsInternshipsTabs />
        <Pagination />
      </div>
    </div>
  );
}
