// components/ui/TabsTrigger.tsx
type TabsTriggerProps = {
    value: string;
    activeTab: string;
    handleTabClick: (value: string) => void;
    children: React.ReactNode;
  };
  
  export function TabsTrigger({ value, activeTab, handleTabClick, children }: TabsTriggerProps) {
    const isActive = activeTab === value;
    
    return (
      <button
        className={`px-4 py-2 font-medium ${
          isActive ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
        }`}
        onClick={() => handleTabClick(value)}
      >
        {children}
      </button>
    );
  }
  