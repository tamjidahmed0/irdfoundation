import Link from "next/link"
import Image from "next/image";




const MobileBottomNav = () => {
    return (
        <div className=" w-full fixed bottom-0 bg-white shadow-2xl rounded-t-3xl lg:hidden">
            <div className="flex justify-between gap-[27px] p-5  ">
                <Link href={'/'} >
                    <Image src={'/assets/Home.png'} width={40} height={40} alt="home" />
                </Link>

                <Link href={'/'} >
                    <Image src={'/assets/Duas.png'} width={40} height={40} alt="home" />
                </Link>

                <Link href={'/'} >
                    <Image src={'/assets/memorize.png'} width={40} height={40} alt="home" />
                </Link>

                <Link href={'/'} >
                    <Image src={'/assets/Bookmark.png'} width={40} height={40} alt="home" />
                </Link>

                <Link href={'/'} >
                    <Image src={'/assets/Book.png'} width={40} height={40} alt="home" />
                </Link>
            </div>
        </div>
    )
}

export default MobileBottomNav