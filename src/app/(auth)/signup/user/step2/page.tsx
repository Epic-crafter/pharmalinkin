// app/register/step2/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegistrationContext } from "@/lib/contexts/user-register-context";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const { updateRegistrationData } = useRegistrationContext();
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateRegistrationData("password", password);
    updateRegistrationData("firstName", firstName);
    updateRegistrationData("lastName", lastName);
    router.push('/signup/user/selection');
  };

  return (
    <Card className="lg:w-[30vw] mx-auto">
      <CardHeader>
        <h2>Step 2: Personal Information</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
          <Label htmlFor="fn">First name</Label>
          <Input
            id="fn"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Label htmlFor="ln">Last name</Label>

          <Input
            id="ln"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Next</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Page;
