// // components/ui/Tabs.tsx
// import { useState } from "react";

// type TabsProps = {
//   defaultValue: string;
//   children: React.ReactNode;
// };

// export function Tabs({ defaultValue, children }: TabsProps) {
//   const [activeTab, setActiveTab] = useState(defaultValue);

//   const handleTabClick = (value: string) => {
//     setActiveTab(value);
//   };

//   return (
//     <div className="w-full">
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child)) {
//           return React.cloneElement(child, { activeTab, setActiveTab, handleTabClick });
//         }
//         return child;
//       })}
//     </div>
//   );
// }
