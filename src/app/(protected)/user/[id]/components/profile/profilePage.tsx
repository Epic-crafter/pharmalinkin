import React from 'react';
import ProfileNavigation from '../profile/profilenav';

const ProfilePage: React.FC = () => {
  return (
    <main className="flex flex-col items-start pt-8 pl-8 text-base font-semibold leading-relaxed text-slate-500 max-md:pl-5">
      <ProfileNavigation />
    </main>
  );
};

export default ProfilePage;