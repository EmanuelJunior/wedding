"use client"

import { Header, CountdownTimer, KeyDetails, Footer } from "@/components/home";
import OurStory from "@/components/home/our-story";
import { Loading } from "@/components/ui";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header/>
      <CountdownTimer/>
      <OurStory/>

      <Suspense fallback={<Loading/>}>
        <KeyDetails/>
      </Suspense>

      <Footer/>
    </>
  );
}
