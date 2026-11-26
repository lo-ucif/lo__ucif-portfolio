import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/layouts/SiteHeader";

export function MainLayout() {
  return (
    <div className="w-full overflow-x-clip min-h-screen">
      <SiteHeader />
      <Outlet />
    </div>
  );
}
