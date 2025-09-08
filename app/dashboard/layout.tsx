import { GuestProvider } from "@/contexts/guest";
import { fetchAuthGuest } from "../actions/guest";
import { Suspense } from "react";
import { Loading } from "@/components/ui";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const guest = await fetchAuthGuest();

  return (
    <Suspense
      fallback={<Loading/>}
    >
      <GuestProvider initialGuest={guest}>
        {children}
      </GuestProvider>
    </Suspense>
  );
} 