"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function SessionEnforcer() {
  const router = useRouter();

  useEffect(() => {
    // If the window flag is not set, it means this was a hard reload (refresh) 
    // or a direct link access from a new tab/window, rather than a soft navigation 
    // from the login page.
    if (!(window as any).__APP_LOGGED_IN__) {
      // It's a page reload or new session. Force logout.
      fetch("/api/auth/logout", { method: "POST" }).then(() => {
        router.push("/admin");
      });
    }
  }, [router]);

  return null;
}
