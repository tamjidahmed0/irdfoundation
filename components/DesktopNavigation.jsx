import Link from "next/link"
import Image from "next/image"

const DesktopNavigation = () => {
    return (
        <div className="bg-white  py-[20px] hidden xl:flex  justify-center rounded-xl ">

            <div className="w-[38px] flex flex-col justify-evenly items-center h-full">
                <div className="w-[73px] h-[73px]">
                    <Image src={'/assets/logo.png'} width={500} height={500} alt="logo" />
                </div>

                <div className="flex flex-col gap-[27px]">
                    <Link href={'/'} >
                        <Image src={'/assets/Home.png'} width={500} height={500} alt="home" />
                    </Link>

                    <Link href={'/'} >
                        <Image src={'/assets/Duas.png'} width={500} height={500} alt="home" />
                    </Link>

                    <Link href={'/'} >
                        <Image src={'/assets/memorize.png'} width={500} height={500} alt="home" />
                    </Link>

                    <Link href={'/'} >
                        <Image src={'/assets/Bookmark.png'} width={500} height={500} alt="home" />
                    </Link>

                    <Link href={'/'} >
                        <Image src={'/assets/Ruqyah.png'} width={500} height={500} alt="home" />
                    </Link>

                    <Link href={'/'} >
                        <Image src={'/assets/DuaQ&A.png'} width={500} height={500} alt="home" />
                    </Link>

                    <Link href={'/'} >
                        <Image src={'/assets/Book.png'} width={500} height={500} alt="home" />
                    </Link>
                </div>




                <div className="w-[73px] h-[73px]">
                    <Image src={'/assets/support.png'} width={500} height={500} alt="logo" />
                </div>


            </div>

        </div>
    )
}

export default DesktopNavigation