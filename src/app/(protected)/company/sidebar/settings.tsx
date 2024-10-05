import React from 'react';
import SidebarSettingsItem from './settingsItem';

interface SettingsItem {
  icon: string;
  text: string;
}

const settingsItems: SettingsItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fa6148bd6308148f2d6bbb36a1f1c44370a7235a22fbea630899cc6270a1786?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "Settings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a118d5289afdf660d72470b590ac76698a954a18198a4c1462ab480e1525f52e?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", text: "Help Center" },
];

const SidebarSettings: React.FC = () => {
  return (
    <section className="flex flex-col mt-8 w-full">
      <div className="flex mt-8 w-full bg-indigo-200 min-h-[1px]" />
      <h2 className="flex gap-2.5 items-start self-start pl-8 mt-8 text-sm font-semibold tracking-wide leading-6 text-gray-800 whitespace-nowrap opacity-50">
        SETTINGS
      </h2>
      <ul className="flex flex-col mt-6 w-full text-base font-medium leading-relaxed text-slate-500">
        {settingsItems.map((item, index) => (
          <SidebarSettingsItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default SidebarSettings;