import React from 'react';
import SidebarLogo from './SidebarLogo';
import SidebarNavItem from './SidebarNavItem';
import SidebarDivider from './SidebarDivider';
import SidebarSection from './SidebarSection';
import SidebarUserProfile from './SidebarUserProfile';
import Image from 'next/image';

interface NavItem {
  icon: string;
  label: string;
  isActive?: boolean;
  notificationCount?: number;
}

// const mainNavItems: NavItem[] = [
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e684ffdf25128fc6db78a8c0dca17615af655737336ec8d6b4c225c6db6b3349?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "Dashboard", isActive: true },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d7cf4b6288da89bb78a878fbbc3cefc7e99377efb1652b49440f8bbfc891411?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "Messages", notificationCount: 1 },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a35cc7bce1c74f8d0635feaa93c8df4a410c86e5f3978a476f0ee99aea0d121?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "My Applications" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc5132b925219810e29855e8ce13e2cabc952817f99600f63f898789bce52cf4?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "Find Jobs" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/626f6676651084e18af0348e0a7b72708d4d35cb53788998854fd0106a6ffe21?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "Browse Companies" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/118b8971bdaaf2644016a0103f5aae46d1a3f4eac7f7d7011bf786863dbbf3ee?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "My Public Profile" },
// ];

// const settingsNavItems: NavItem[] = [
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fa6148bd6308148f2d6bbb36a1f1c44370a7235a22fbea630899cc6270a1786?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "Settings" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb71aebbdbdf3eb8b3939bc879287f0bd898b0c15bc5590dc57673f76568448?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b", label: "Help Center" },
// ];

const Sidebar: React.FC = () => {
  return (
    <aside className="flex overflow-hidden flex-col justify-between py-8 shadow-sm bg-slate-50 min-w-[240px] w-[272px]">
      <nav className="flex flex-col w-full max-w-[272px]">
        <SidebarLogo />
        <div className="flex flex-col justify-center mt-8 w-full">
          <ul className="flex flex-col w-full leading-relaxed">
            {/* {mainNavItems.map((item, index) => (
              <SidebarNavItem key={index} {...item} />
            ))} */}
          </ul>
          <SidebarDivider />
          {/* <SidebarSection title="SETTINGS">
            {settingsNavItems.map((item, index) => (
              <SidebarNavItem key={index} {...item} />
            ))}
          </SidebarSection> */}
        </div>
      </nav>

      {/* Using next/image for optimized image loading */}
      <div className="mt-16 max-w-full aspect-[0.86] w-[272px] max-md:mt-10">
        {/* <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d86fc04e0b1c32d6f3fe6b069ccc21b036e50faed724d168c4e6ccf777f2f0?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b"
          alt="Ad Image"
          layout="responsive"
          width={272}
          height={315}
          objectFit="contain"
          loading="lazy"
        /> */}
      </div>

      <SidebarUserProfile email="jakegyll@email.com" />
    </aside>
  );
};

export  {Sidebar};
