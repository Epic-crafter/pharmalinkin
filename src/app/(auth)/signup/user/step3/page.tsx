// app/register/step3/Page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRegistrationContext } from '@/lib/contexts/user-register-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Label } from '@/components/ui/label';

const Page = () => {
  const { registrationData, updateRegistrationData } = useRegistrationContext();
  const [location, setLocation] = useState('');
  const [mostRecentJobTitle, setMostRecentJobTitle] = useState('');
  const [preferredJobTitle, setPreferredJobTitle] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Update registration data in context
    updateRegistrationData('location', location);
    updateRegistrationData('mostRecentJobTitle', mostRecentJobTitle);
    updateRegistrationData('preferredJobTitle', preferredJobTitle);

    try {
      // API call to register the user
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        router.push(`/signup/user/email-verification?email=${registrationData.email}`);
      } else {
        console.error('Registration failed');
        // Optionally display an error message to the user
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
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <Label htmlFor="recentJobTitle">Most Recent Job Title</Label>
          <Input
            type="text"
            value={mostRecentJobTitle}
            onChange={(e) => setMostRecentJobTitle(e.target.value)}
            required
          />
          <Label htmlFor="preferredJobTitle">Preferred Job Title</Label>
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

export default Page;
