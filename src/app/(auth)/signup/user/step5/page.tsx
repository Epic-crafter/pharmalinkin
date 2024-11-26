// app/register/step3/Page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRegistrationContext } from '@/lib/contexts/user-register-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import Switch from '@/components/ui/switch';

const Page = () => {
  const { registrationData, updateRegistrationData } = useRegistrationContext();
  const [preferredJobTitle, setPreferredJobTitle] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [openForRemote, setOpenForRemote] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Update registration data in the context
    updateRegistrationData('preferredJobTitle', preferredJobTitle);
    updateRegistrationData('preferredLocation', preferredLocation);
    updateRegistrationData('openForRemote', openForRemote);
    
    // Make API call to register the user
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        router.push('/signup/user/email-verification');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Card className='lg:w-[30vw] mx-auto'>
      <CardHeader>
        <h2>Job Preferences</h2>
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

export default Page;
