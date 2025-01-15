'use client'
import Image from "next/image"
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import CustomAudioPlayer from "./CustomAudioPlayer";
import { Menu, Copy, LightbulbIcon, Bookmark, Share2, } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import MobileCategories from "./MobileCategories";


const Content = () => {
    const duas = useSelector((state) => state.duas);
    const subCatId = useSelector((state) => state.subCatId.subCatId);
    const duaId = useSelector((state) => state.duaId.duaId);

    const [isOpen, setIsOpen] = useState(false);







    const handleScroll = (id) => {
        const element = document.getElementById(id)

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

    }


    useEffect(() => {

        handleScroll(subCatId)
        handleScroll(duaId)

    }, [subCatId, duaId])



    const handleCopy = (item) => {
    
        const textToCopy = `
          Name: ${item.dua_name_en || 'N/A'}
          Top: ${item.top_en || 'N/A'}
          Arabic: ${item.dua_arabic || 'N/A'}
          Transliteration: ${item.transliteration_en || 'N/A'}
          Translation: ${item.translation_en || 'N/A'}
          Reference: ${item.refference_en || 'N/A'}
        `.trim();

        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Dua copied to clipboard!');
            })
            .catch(() => {
                alert('Failed to copy!');
            });
    };





    const toggleSheet = () => setIsOpen(!isOpen);



    return (
        <div className=" flex flex-col gap-5 ">
            {/* navigation mobile*/}
            <div className="flex justify-end">



                <div className="relative hidden md:flex">
                    
                    <input
                        type="text"
                        placeholder="Search by Dua Name"
                        className="w-full pl-3 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
                    />
                    <div className="bg-gray-400">
                        <Image
                            src={'/assets/Frame.png'}
                            width={500}
                            height={500}
                            alt="search"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        />
                    </div>
                </div>

            </div>
            <div className=" overflow-y-auto xl:h-[722px] rounded-xl">





                <div className="flex flex-col gap-5">

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    
                        <SheetContent side='left'>
                            <SheetHeader>
                                <SheetTitle ></SheetTitle>
                                <SheetDescription>
                                <MobileCategories />
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    {/* mobile menu */}
                    <div className=" w-full bg-white h-[57px] rounded-xl flex items-center xl:hidden" >
                        <h2 className="text-[16px] text-[#393939] mx-4 flex items-center gap-4"><Menu size={25} onClick={toggleSheet} /> Dua's importance</h2>
                    </div>

                    {duas[0]?.subCategories?.map((section, index) => (

                        <div className="space-y-4" key={index}>
                            {/* Title */}
                            <div className="bg-white h-[57px] rounded-xl flex items-center px-5 " id={section.subcat_id}>
                                <h2 className="text-[16px] text-gray-800"> <span className="text-[#1FA45B]" >Section :</span> {section.subcat_name_en}</h2>
                            </div>


                            <div className=" space-y-4 ">
                                {section.duas?.map((item, idx) => (
                                    <div
                                        id={item.dua_id}
                                        key={idx}
                                        className="pb-10 flex flex-col gap-5 p-4 rounded-md bg-white text-gray-700"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Image src={'/assets/allah.png'} width={500} height={500} alt="allah" className="w-[35px] h-[35px]" />
                                            <h1 className="text-[#1FA45B] font-semibold">{item.dua_name_en}</h1>
                                        </div>


                                        {item.top_en && (
                                            <p className="text-[16px] text-[#393939] leading-[24px]">{item.top_en}</p>
                                        )}


                                        {item.dua_arabic &&
                                            (
                                                <p className="text-[24px] text-right leading-[71.33px] font-quran">{item.dua_arabic}</p>
                                            )
                                        }





                                        <div className="">
                                            {item.transliteration_en && (
                                                <div className="flex flex-col gap-3">

                                                    <p className=" italic text-[16px] leading-[25px]"><span className="font-bold">Transliteration:</span> {item.transliteration_en}</p>
                                                    <p><span className="font-bold">Translation:</span> {item.translation_en}</p>
                                                </div>
                                            )}


                                        </div>

                                        <div>
                                            <p className="font-bold text-[#1FA45B]">Reference:</p>
                                            <span className="font-medium text-[#393939]">{item.refference_en}</span>
                                        </div>

                                        {/* hard coded link due to link error */}

                                        <div className="flex items-center justify-between">
                                            <CustomAudioPlayer audioLink={'https://server6.mp3quran.net/thubti/001.mp3'} />
                                            <div className="flex gap-7">
                                                <Copy size={25} onClick={() => handleCopy(item)} className=" cursor-pointer" />
                                                <Bookmark size={25} className=" cursor-pointer" />
                                                <LightbulbIcon size={25} className=" cursor-pointer" />
                                                <Share2 size={25} className=" cursor-pointer" />
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

export default Content