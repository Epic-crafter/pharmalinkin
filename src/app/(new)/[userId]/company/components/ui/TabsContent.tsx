// components/ui/TabsContent.tsx
type TabsContentProps = {
    value: string;
    activeTab: string;
    children: React.ReactNode;
  };
  
  export function TabsContent({ value, activeTab, children }: TabsContentProps) {
    if (value !== activeTab) return null;
    return <div>{children}</div>;
  }
  