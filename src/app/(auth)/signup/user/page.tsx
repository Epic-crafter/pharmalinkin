// app/register/step1/page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRegistrationContext } from '@/lib/contexts/user-register-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Page = () => {
  const { updateRegistrationData } = useRegistrationContext();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    updateRegistrationData('email', email);
    updateRegistrationData('phone', phone);
    router.push('/signup/user/step2');
  };

  return (
    <>
    <Card className='lg:w-[30vw] mx-auto'>
      <CardHeader>
        <h2>Step 1: Contact Information</h2>
      </CardHeader>
      <CardContent >
        <form onSubmit={handleSubmit}className=' flex flex-col gap-3'>
        <Label htmlFor="email">Email</Label> 
          <Input
            id='email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
         <Label htmlFor="phone">Phone</Label>          
          <Input
          id='phone'
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button type="submit">Next</Button>
        </form>
      </CardContent>
    </Card>
    </>
    
  );
};

export default Page;
