import { Button } from "@/components/ui/button";

export default function Pagination() {
  return (
    <div className="flex justify-between items-center mt-4">
      <p>Showing 1 of 1</p>
      <div className="space-x-2">
        <Button variant="default">Previous</Button>
        <Button variant="default">Next</Button>
      </div>
    </div>
  );
}
