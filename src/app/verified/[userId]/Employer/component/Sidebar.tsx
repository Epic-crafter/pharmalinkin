import  {Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@/lib/contexts/user";
import {
  Bookmark,
  CircleHelp,
  Contact,
  Menu,
  Moon,
  PersonStanding,
  Phone,
  Settings,
  SunDim,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
export function SidePannel({handleSheetOpenChange}:any) {
  const { userId } = useUser();
  const [userData, setUserData] = useState<any>([]);

  const fetchUserData = async () => {
    if (userId) {
      try {
        const response = await fetch("/api/company/get-profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data[0]);
          
          setUserData(data[0]);
          console.log("Fetched Company Data:", data);
        } else {
          console.error("Failed to fetch company data");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    }
    
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);


  return (
 <Sheet onOpenChange={handleSheetOpenChange}>
        <SheetTrigger asChild className="lg:hidden block">
        <Menu/>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 littleTransition">
        <SheetHeader className=" bg-[#5b8fba] dark:bg-[#233040] h-44 p-4 items-start">
          <div className="my-3 flex w-full items-center pr-2 justify-between">
            <Avatar className="h-16 w-16 ">
              <AvatarImage
                className="rounded-full z-20"
                src={userData?.logo}
                alt="@shadcn"
              />
              <AvatarFallback>Dn</AvatarFallback>
            </Avatar>
            <div className="relative z-10">
              <div className="iconRotate">
             
              <div className="circleBG absolute top-1/2 left-1/2 h-1 w-1 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black opacity-40 mix-blend-multiply">
              </div>
            </div>
          </div>
          </div>
          <SheetTitle className="text-xl z-20 text-white">{userData.companyName}</SheetTitle>
          <SheetDescription className="text-white opacity-85">
            +91 667575657
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col">
          <div className="flex items-center border-b gap-5 py-[13px] px-4">
            <User />
            <p>My Profile</p>
          </div>
          <div className="flex items-center  gap-5 py-[13px] px-4">
            <Users className="z-20" />
            <p className="z-20">New Group</p>
          </div>
          <div className="flex items-center gap-5 py-[13px] px-4">
            <Contact className="z-20"/>
            <p className="z-20">Contacts</p>
          </div>
          <div className="flex items-center gap-5 py-[13px] px-4">
            <Phone  className="z-20"/>
            <p className="z-20">Calls</p>
          </div>
          <div className="flex items-center gap-5 py-[13px] px-4">
            <PersonStanding className="z-20"/>
            <p className="z-20">People Nearby</p>
          </div>
          <div className="flex items-center gap-5 py-[13px] px-4">
            <Bookmark  className="z-20"/>
            <p className="z-20">Saved Messages</p>
          </div>
          <div className="flex items-center border-b gap-5 py-[13px] px-4">
            <Settings className="z-20"/>
            <p className="z-20">Settings</p>
          </div>
          <div className="flex items-center gap-5 py-[13px] px-4">
            <UserPlus className="z-20"/>
            <p className="z-20">Invite Friends</p>
          </div>
          <div className="flex items-center gap-5 py-[13px] px-4">
            <CircleHelp className="z-20"/>
            <p className="z-20">Telegram Features</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
