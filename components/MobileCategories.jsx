
'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { useDispatch } from 'react-redux';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import getAllCategories from "@/lib/getAllCategories"
import getSubCat from "@/lib/getSubCat"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { setDuas } from "@/features/duas";
import { setSubCatId } from "@/features/subCat";
import { setDuaId } from "@/features/duaId";

const MobileCategories = () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const search = useSearchParams().get('cat');
  const subcat = useSearchParams().get('subcat');
  const dua = useSearchParams().get('dua');

  const [subCatLoading, setSubCatLoading] = useState(true);

  useEffect(() => {
    const api = async () => {
      try {
        const result = await getAllCategories();
        setResult(result);
      } catch (error) {
        console.log(error);
      }
    };

    api();
  }, [search]);

  useEffect(() => {
    const api = async () => {
      setSubCatLoading(true);
      try {
        const subcat = await getSubCat({ categoryId: search });
        dispatch(setDuas(subcat));
        setSubCat(subcat);
    
      } catch (error) {
        console.log(error);
      } finally {
        setSubCatLoading(false);
      }
    };

    api();
  }, [search]);

  useEffect(() => {
    if (subcat) {
      dispatch(setSubCatId(subcat));
    }
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredResult = result.filter((value) =>
    value.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-5">
      <div className='bg-white grid grid-rows-[122px_600px] h-full rounded-xl'>
        <div className='flex flex-col gap-3 sticky top-0'>
          <div className='bg-[#1FA45B] h-[57px] text-white font-semibold flex items-center justify-center'>
            <h1>Categories</h1>
          </div>
          <div className="px-3 bg-white">
            <div className="relative">
              <Image src={'/assets/Frame.png'} width={500} height={500} alt="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Categories"
                className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="rounded-b-xl overflow-y-auto px-4">
          <Accordion type="single" collapsible defaultValue={parseInt(search)} className="space-y-2">
            {filteredResult.length > 0 ? (
              filteredResult.map((value, i) => (
                <AccordionItem value={value.cat_id} key={i}>
                  <Link href={`/duas?cat=${value.cat_id}`}>
                    <AccordionTrigger className={`hover:bg-[#e8f0f5] p-[10px] h-[80px] rounded-xl flex justify-between ${search == value.cat_id && 'bg-[#e8f0f5]'}`}>
                      <div className="flex justify-between items-center">
                        <Image src={'/assets/default.png'} width={500} height={500} alt="default" className="w-[60px] h-[60px]" />
                        <div className="ml-4 flex flex-col gap-2">
                          <p className="font-semibold text-[16px] text-[#393939]">{value.cat_name_en}</p>
                          <span className="text-[#7E7E7E]">Category : {value.no_of_subcat}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center border-l pl-2">
                        <h1>{value.no_of_dua}</h1>
                        <span className="text-[#7E7E7E]">Duas</span>
                      </div>
                    </AccordionTrigger>
                  </Link>
                  <AccordionContent className="ml-12 my-3">
                    <Accordion type="single" collapsible>
                      {subCatLoading ? (
                        <div>Loading...</div>
                      ) : (
                        <div className="border-dotted border-l-2 border-[#1FA45B]">
                          {subCat[0]?.subCategories?.map((subValue, index) => (
                            <AccordionItem value={subValue.id} key={index} id={search} onClick={() => handleScroll(search)}>
                              <Link href={`/duas?cat=${search}&subcat=${subValue.subcat_id}`} onClick={() => dispatch(setSubCatId(subValue.subcat_id))}>
                                <AccordionTrigger className="p-[8px] space-y-3">
                                  <div className="bg-[#1FA45B] -translate-x-3 mt-1.5 w-1.5 rounded-full h-1.5" />
                                  <p className={`font-semibold text-[16px] ${subcat == subValue.subcat_id ? 'text-[#1FA45B]' : 'text-[#373737]'}`}>{subValue.subcat_name_en}</p>
                                </AccordionTrigger>
                              </Link>
                              {subValue.duas?.map((duaValue, duaIndex) => (
                                <Link href={`/duas?cat=${search}&subcat=${subValue.subcat_id}&dua=${duaValue.dua_id}`} key={duaIndex} onClick={() => dispatch(setDuaId(duaValue.dua_id))}>
                                  <AccordionContent className="ml-5 mt-2">
                                    <div className="flex items-center">
                                      <Image src={'/assets/arrow.svg'} width={500} height={500} alt="arrow" className="w-[16px] h-[44px]" />
                                      <p className={`ml-3 ${dua == duaValue.dua_id ? 'text-[#1FA45B]' : 'text-[#373737]'}`}>{duaValue.dua_name_en}</p>
                                    </div>
                                  </AccordionContent>
                                </Link>
                              ))}
                            </AccordionItem>
                          ))}
                        </div>
                      )}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500">No results found</p>
              </div>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MobileCategories;
