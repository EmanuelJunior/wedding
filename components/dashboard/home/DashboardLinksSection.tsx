"use client"

import { dashboardPageLinks } from "@/data/dashboard";
import Link from "next/link";

export const DashboardLinksSection = () => {
  return (
    <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {dashboardPageLinks.map(({ icon, title, description, path }) => (
        <Link href={`/dashboard/${path}`}>
          <div className="p-3 hover:cursor-pointer hover:outline hover:outline-4 hover:outline-red-500 flex flex-col justify-center items-center shadow-2xl rounded-lg dark:bg-gray-900">
            {icon}
            <h1 className="text-2xl dark:text-white">{title}</h1>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};
