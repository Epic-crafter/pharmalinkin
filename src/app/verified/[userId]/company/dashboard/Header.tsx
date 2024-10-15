import { Button } from "@/components/ui/button";
import Avatar from "../../../../../components/ui/avatar";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Pharmalinkin</h1>
        <nav className="space-x-4">
          <Button variant="link">Plans and Pricing</Button>
          <Button variant="link">Dashboard</Button>
          <Button variant="link">Post Internship/Job</Button>
        </nav>
      </div>
    </header>
  );
}
