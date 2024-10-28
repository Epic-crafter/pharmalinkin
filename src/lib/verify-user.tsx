"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./VerifyUser.css"
const Verify = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const currentPath = usePathname(); // Get the current path

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (
          currentPath.startsWith("/signup") ||
          currentPath==="/"||
          currentPath==="/password-recovery"
        ) {
          setLoading(false);
          return;
        }
        const res = await fetch(`/api/users/verify-token`, {
          method: "GET",
          credentials: "include",
          cache: "no-cache",
        });
        const responseData = await res.json();
        setLoading(false);

        if (responseData.valid) {
          const { role, sub, email } = responseData.user;
          const data = { role, id: sub, email };
          const targetPath = `/verified/${sub}/${role}`;
          // Only redirect if the current path doesn't already include the role and sub (id)
          if (!currentPath.includes(role) || !currentPath.includes(sub)) {
            router.push(targetPath); // Redirect to the dashboard
          }
          return;
        }
        // Redirect to login page if the token is invalid
        router.push("/login");
      } catch (error) {
        setLoading(false);
        console.error("Token verification failed:", error);
        router.push("/login"); 
      }
    };

    verifyToken();
  }, [currentPath]);

  if (loading) {
    return <div className="fixed z-50 top-0 left-0 w-full"><div className="auth-loader"></div></div>;
  }

  return null; 
};

export default Verify;
