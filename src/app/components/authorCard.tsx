import Image from "next/image"

function Author() {
    return (
        <div className='bg-white shadow-lg rounded-lg p-6 mt-12 ' >
            <div className='flex items-center animation-fadeIn ' >

                <Image className="w-16 h-16 rounded-full mr-4  object-cover border-2 border-red-500 "
                    src={"/images/dp2.webp"} alt="Author-pic" width={64} height={64} />

                <div>
                    <h3 className='text-xl font-bold'>Kabir Iqbal </h3>
                    <p className="text-slate-500 "> Web Designer | Frontend Web developer </p>
                </div>
            </div>

            <p>Web Developer | Expertise in TypeScript, Next.js, and Python | Building scalable,
                dynamic, and user-friendly solutions.</p>

            <div className="mt-4 flex space-x-3" >
                <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-r-md  hover:bg-blue-700 transition duration-300 " >
                    Twitter
                </a>
                <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-r-md  hover:bg-blue-700 transition duration-300 " >
                    Linkedin
                </a>
                <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-r-md  hover:bg-blue-700 transition duration-300 " >
                    Github
                </a>
            </div>

        </div>
    )
}

export default Author
