import React from 'react';
import SidebarMenuItem from './menuItem';

interface MenuItem {
  icon: string;
  text: string;
  isActive?: boolean;
  notificationCount?: number;
}

const menuItems: MenuItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d241f18e2c6aeb6dc3b60a4df2c37dc27fec06850fbfeda5593002c1308ee707?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "Manage Jobs", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1efaffae8b0aee56a8c00199f22c564873151a4450471f5885d5289768ae5c3?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "Messages", notificationCount: 1 },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/750f54e43c00966f1caa44b3bd9c86053620c31244abdfeb7b0cfafc163b1673?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "Company Profile" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b358d7fbfcb41ba8281dc23ab77b79e2b605c3d4ed4fb4112878b368200619fa?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "All Applicants" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cfed3dec27c57bcb8166d3c4991e81b5d11d926e070148855d106ee47ffabef?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "Job Listing" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13fc3e253fd83eeafc1909a71f445a9a124efb8929d6d648882f7f174aca5bad?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "My Schedule" },
];

const SidebarMenu: React.FC = () => {
  return (
    <nav className="flex flex-col justify-center mt-8 w-full">
      <ul className="flex flex-col w-full leading-relaxed">
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;