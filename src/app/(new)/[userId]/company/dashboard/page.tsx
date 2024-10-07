import JobsInternshipsTabs from "./Tabs";
import Pagination from "./Pagination";

export default function Dashboard() {
  return (
    <div>
      <div className="container mx-auto py-8">
        <JobsInternshipsTabs />
        <Pagination />
      </div>
    </div>
  );
}
