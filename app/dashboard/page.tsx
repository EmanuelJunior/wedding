"use client"

import { 
  Countdown,
  DashboardLinksSection,
  HeaderDashboard,
  LiveStatistics,
  MyProfile,
  QuickActions, 
  WeddingData 
} from "@/components/dashboard"

const DashboardPage = () => {

  return (
    <main className="mx-10 sm:mx-16 md:mx-20 my-6 sm:my-10">
      
      <HeaderDashboard/>
      <DashboardLinksSection/>
      
      <div className="grid grid-cols-5 gap-5 mt-10">
        <section className="col-span-5 sm:col-span-3">
          <Countdown/>
          <WeddingData/>
        </section>

        
        <section className="col-span-5 sm:col-span-2 space-y-5">
          <MyProfile/>
          <LiveStatistics/>
          <QuickActions/>
        </section>
      </div>
    </main>
  )
}

export default DashboardPage