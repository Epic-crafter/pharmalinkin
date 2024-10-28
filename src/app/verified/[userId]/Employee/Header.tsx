import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";
// import Avatar from "../../../../../components/ui/avatar";
import Link from "next/link";
import { useUser } from "@/lib/contexts/user";
export default function Header() {
  const { userId } = useUser();

  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Pharmalinkin</h1>
        <nav className="space-x-4">
          <Button variant="link"><Link href="">Dashboard</Link></Button>
          <Button variant="link"><Link href="">Plans and Pricing</Link></Button>
          <Button variant="link" className="text-lg"><Link href=""><FaRegUserCircle/></Link></Button>
        </nav>
      </div>
    </header>
  );
}
