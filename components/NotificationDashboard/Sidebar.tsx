import React from 'react';
import SidebarItem from './SidebarItem';
import SidebarSection from './SidebarSection';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const mainMenuItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ea4e27015737e6afad5ede441c4ad036c2f924f3a57fd6f9fe0c05aef36e985?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "Manage Jobs", active: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5081296152d75e42994c4c9cd8737c95493f6f4182645cf641cf43dd427ba852?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "Messages", badge: 1 },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/865c41ddd2acfafc88e10cf717e7f45380c093bf1f86b7f741856caefe21e0f6?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "My Applications" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc5132b925219810e29855e8ce13e2cabc952817f99600f63f898789bce52cf4?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "Find Jobs" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3bd5070805e4d3127f9bc5b9998673ca43ebfecd1b92ea0cbb26b6fb9a03f6f9?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "Browse Companies" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/118b8971bdaaf2644016a0103f5aae46d1a3f4eac7f7d7011bf786863dbbf3ee?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "My Public Profile" },
  ];

  const settingsItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fa6148bd6308148f2d6bbb36a1f1c44370a7235a22fbea630899cc6270a1786?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "Settings" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5aca2139c5fb89fe5232a5e5cb80a8c140b3a2a60992ca646a7357564054709a?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3", text: "Help Center" },
  ];

  return (
    <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
      <nav className="flex overflow-hidden flex-col justify-between py-8 mx-auto w-full shadow-sm bg-slate-50">
        <div className="flex flex-col w-full max-w-[272px]">
          <div className="flex gap-2 items-center self-center pr-16 text-2xl font-bold tracking-tight text-gray-800 whitespace-nowrap max-md:pr-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/df93e6789f1ec707ad2bc872be3b8defeaf51314ca57c90bcbac513a8f0a5c80?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
            <div className="self-stretch my-auto">Pharmalinkin</div>
          </div>
          <div className="flex flex-col justify-center mt-8 w-full">
            <div className="flex flex-col w-full leading-relaxed">
              {mainMenuItems.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </div>
            <div className="flex mt-8 w-full bg-indigo-200 min-h-[1px]" />
            <SidebarSection title="SETTINGS" items={settingsItems} />
          </div>
        </div>
        <div className="flex gap-4 items-start px-8 pt-6 mt-96 max-w-full text-sm leading-relaxed text-gray-800 whitespace-nowrap w-[272px] max-md:px-5 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dab5c323f069929b17d92057ee0b1ebb20b3e1c86792156133c317ca4d55e09?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="User avatar" className="object-contain shrink-0 self-start w-12 aspect-square" />
          <div className="grow shrink self-end mt-7 opacity-50 w-[134px]">jakegyll@email.com</div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;