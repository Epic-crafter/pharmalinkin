// app/register/step4/Page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRegistrationContext } from '@/lib/contexts/user-register-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Label } from '@/components/ui/label';

const Page = () => {
  const { updateRegistrationData } = useRegistrationContext();
  const [collegeName, setCollegeName] = useState('');
  const [collegeStartDate, setCollegeStartDate] = useState('');
  const [collegeEndDate, setCollegeEndDate] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateRegistrationData('collegeName', collegeName);
    updateRegistrationData('collegeStartDate', collegeStartDate);
    updateRegistrationData('collegeEndDate', collegeEndDate);
    updateRegistrationData('degree', degree);
    updateRegistrationData('fieldOfStudy', fieldOfStudy);
    router.push('/signup/user/step5');
  };

  return (
    <Card className='lg:w-[30vw] mx-auto'>
      <CardHeader>
        <h2>College Details</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <Label htmlFor="collegeName">College Name</Label>
          <Input
            type="text"
            id="collegeName"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            required
          />

          <Label htmlFor="collegeStartDate">College Start Date</Label>
          <Input
            type="date"
            id="collegeStartDate"
            value={collegeStartDate}
            onChange={(e) => setCollegeStartDate(e.target.value)}
            required
          />

          <Label htmlFor="collegeEndDate">College End Date</Label>
          <Input
            type="date"
            id="collegeEndDate"
            value={collegeEndDate}
            onChange={(e) => setCollegeEndDate(e.target.value)}
            required
          />

          <Label htmlFor="degree">Degree</Label>
          <Input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />

          <Label htmlFor="fieldOfStudy">Field of Study</Label>
          <Input
            type="text"
            id="fieldOfStudy"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            required
          />

          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Page;
