// components/ui/TabsList.tsx
type TabsListProps = {
    children: React.ReactNode;
  };
  
  export function TabsList({ children }: TabsListProps) {
    return <div className="flex border-b mb-4">{children}</div>;
  }
  