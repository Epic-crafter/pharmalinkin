// app/register/step3/page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRegistrationContext } from '@/lib/contexts/user-register-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import Switch from '@/components/ui/switch';

const page = () => {
  const { updateRegistrationData } = useRegistrationContext();
  const [preferredJobTitle, setPreferredJobTitle] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [openForRemote, setOpenForRemote] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateRegistrationData('preferredJobTitle', preferredJobTitle);
    updateRegistrationData('preferredLocation', preferredLocation);
    updateRegistrationData('openForRemote', openForRemote);
    router.push('/signup/user/complete');
  };

  return (
    <Card className='lg:w-[30vw] mx-auto'>
      <CardHeader>
        <h2>Step 5: Job Preferences</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <Label htmlFor="preferredJobTitle">Preferred Job Title</Label>
          <Input
            type="text"
            id="preferredJobTitle"
            value={preferredJobTitle}
            onChange={(e) => setPreferredJobTitle(e.target.value)}
            required
          />

          <Label htmlFor="preferredLocation">Preferred Location</Label>
          <Input
            type="text"
            id="preferredLocation"
            value={preferredLocation}
            onChange={(e) => setPreferredLocation(e.target.value)}
            required
          />

          <Label htmlFor="openForRemote">Open for Remote?</Label>
          <div className='flex items-center gap-2'>
            <Switch
              id="openForRemote"
              checked={openForRemote}
              onCheckedChange={setOpenForRemote}
            />
            <span>{openForRemote ? 'Yes' : 'No'}</span>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default page;
