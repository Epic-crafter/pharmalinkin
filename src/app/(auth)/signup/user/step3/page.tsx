// app/register/step3/page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRegistrationContext } from '@/lib/contexts/user-register-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
  const { updateRegistrationData } = useRegistrationContext();
  const [location, setLocation] = useState('');
  const [mostRecentJobTitle, setMostRecentJobTitle] = useState('');
  const [preferredJobTitle, setPreferredJobTitle] = useState('');
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    updateRegistrationData('location', location);
    updateRegistrationData('mostRecentJobTitle', mostRecentJobTitle);
    updateRegistrationData('preferredJobTitle', preferredJobTitle);
    router.push('/signup/user/complete');
  };

  return (
    <Card className='lg:w-[30vw] mx-auto'>
      <CardHeader>
        <h2>Step 3: Job Preferences</h2>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit}className=' flex flex-col gap-3'>
      <Input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <Input
            type="text"
            value={mostRecentJobTitle}
            onChange={(e) => setMostRecentJobTitle(e.target.value)}
            required
          />
          <Input
            type="text"
            value={preferredJobTitle}
            onChange={(e) => setPreferredJobTitle(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default page;
