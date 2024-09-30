import React from 'react';
import ProfileNavigation from '../profileLogin/profileNav';

const ProfilePage: React.FC = () => {
    const navigationItems = [
      { label: 'My Profile' },
      { label: 'Login Details', isActive: true },
      { label: 'Notifications' },
    ];
  
    return (
      <main className="flex flex-col items-start pt-8 pl-8 text-base font-semibold leading-relaxed max-md:pl-5">
        <ProfileNavigation items={navigationItems} />
      </main>
    );
  };

export default ProfilePage;