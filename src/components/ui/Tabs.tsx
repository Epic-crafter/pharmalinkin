import * as React from 'react';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        {React.Children.map(children, (child: any) => (
          <button
            onClick={() => setActiveTab(child.props.value)}
            className={`py-2 px-4 rounded ${activeTab === child.props.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child: any) => {
          return child.props.value === activeTab ? child.props.children : null;
        })}
      </div>
    </div>
  );
}

interface TabProps {
  label: string;
  value: string;
  children: React.ReactNode;
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}
