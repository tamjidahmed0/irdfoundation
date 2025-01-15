import React, { Suspense } from "react";
import DesktopNavigation from "@/components/DesktopNavigation";
import Categories from "@/components/Categories";
import Content from "@/components/Content";
import Settings from "@/components/Settings";
import MobileBottomNav from "@/components/MobileBottomNav";


const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <p>Loading...</p>
  </div>
);

const Page = () => {
  return (
    <div className=" ">
      <div className="bottom-9 my-[40px] grid grid-cols-1 xl:grid-cols-[100px_150px_1fr] 3xl:grid-cols-[100px_429px_1fr_330px] h-[90vh] gap-6 px-7">
        <Suspense fallback={<LoadingFallback />}>
          <DesktopNavigation />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Categories />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Content />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Settings />
        </Suspense>
      </div>

      <MobileBottomNav />
    </div>
  );
};

export default Page;
