'use client'
import Image from "next/image"
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const Settings = () => {
  return (
    <div className=" hidden xl:flex flex-col gap-5 ">
    <div className="flex justify-end cursor-pointer">
    <Image src={'/assets/profile.png'} width={500} height={500} alt="profile" className="w-[45px] h-[45px]" />
     
    </div>
    <div className='bg-white grid grid-rows-[122px_600px]  h-full rounded-xl'>

      <div className='mt-6'>
        <div className=' h-[57px]  flex items-center justify-center rounded-t-xl text-[20px] text-[#393939]'>
          <h1>Settings</h1>
        </div>


      </div>







      <div className="mx-4 flex flex-col gap-3">
      

      <div className="h-[55px] bg-[#F7F8FA] flex items-center gap-5 p-5 rounded-xl">
       <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center">
       <Image src={'/assets/language.png'} width={500} height={500} alt="language" className="w-[24px] h-[24px]" />
       </div>
        <span className="text-[#868686] text-[16px]">Language settings</span>
      </div>

      <div className="h-[55px] bg-[#F7F8FA] flex items-center gap-5 p-5 rounded-xl">
       <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center">
       <Image src={'/assets/general.png'} width={500} height={500} alt="language" className="w-[24px] h-[24px]" />
       </div>
        <span className="text-[#868686] text-[16px]">General settings</span>
      </div>

      <div className="h-[55px] bg-[#F7F8FA] flex items-center gap-5 p-5 rounded-xl">
       <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center">
       <Image src={'/assets/font.png'} width={500} height={500} alt="language" className="w-[24px] h-[24px]" />
       </div>
        <span className="text-[#868686] text-[16px]">Font settings</span>
      </div>




      </div>


    </div>
  </div>
  )
}

export default Settings