import React from 'react'

const ContentSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
    {/* Search Skeleton */}
    <div className="flex justify-end">
      <div className="relative hidden md:flex">
        <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  
    {/* Content Skeleton */}
    <div className="overflow-y-auto xl:h-[722px] rounded-xl">
      <div className="flex flex-col gap-5">
        {/* Mobile Menu Skeleton */}
        <div className="w-full h-[57px] bg-white rounded-xl animate-pulse xl:hidden"></div>
  
        {/* Section Skeleton */}
        {[...Array(3)].map((_, index) => (
          <div className="space-y-4" key={index}>
            {/* Section Title Skeleton */}
            <div className="bg-white h-[57px] rounded-xl animate-pulse"></div>
  
            {/* Dua Skeleton */}
            <div className="space-y-4">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="pb-10 flex flex-col gap-5 p-4 rounded-md bg-white animate-pulse"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-1/3 bg-gray-300 rounded-md"></div>
                  </div>
  
                  <div className="h-5 w-full bg-gray-300 rounded-md"></div>
                  <div className="h-7 w-full bg-gray-300 rounded-md"></div>
  
                  <div className="flex flex-col gap-3">
                    <div className="h-4 w-3/4 bg-gray-300 rounded-md"></div>
                    <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
                  </div>
  
                  <div className="h-4 w-1/4 bg-gray-300 rounded-md"></div>
  
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-20 bg-gray-300 rounded-md"></div>
                    <div className="flex gap-7">
                      {[...Array(4)].map((_, iconIdx) => (
                        <div
                          key={iconIdx}
                          className="h-6 w-6 bg-gray-300 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )
}

export default ContentSkeleton