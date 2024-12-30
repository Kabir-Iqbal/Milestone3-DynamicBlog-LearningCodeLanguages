import React from 'react'

function Feature() {
    return (
        <div>
            <div className='w-[90%] mx-auto ' >
                <h1 className='text-center text-2xl font-semibold my-3 mt-14' >About the Author</h1>
                <p className='text-slate-700 text-lg md:text-center mb-20 ' >Welcome to our very first blog on programming and learning! My name is <span className='font-semibold font-serif text-slate-800 ' > Kabir Iqbal, </span>
                    a passionate developer and freelance UI designer, always eager to explore the fascinating world
                    of technology. With hands-on experience in React, Next.js, Tailwind CSS, and more, I aim to share
                    valuable insights, tips, and resources that will help aspiring programmers and tech enthusiasts on
                    their journey. This blog is a platform to learn, grow, and build something extraordinary together.
                    Let’s dive into the incredible realm of coding and creativity!</p>
            </div>
            <div className='max-w-7xl mx-auto px-5 ' >
                <h1 className='text-3xl font-bold text-center mt-12 my-8 text-red-600 animate-color-change ' >
                    {" "}
                    Exploring Our Categories {" "}
                </h1>

                <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100' >
                    {[
                        "Technology",
                        "Artificial",
                        "HTML",
                        "Typescript",
                        "Nextjs",
                        "Web Development",
                    ].map((category, index) =>
                        <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex justify-center items-center text-neutral-600  ' >
                            <p className='text-center text-lg font-semibold'>{category}</p>
                            <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-2 ' >

                            </div>
                        </div>)}
                </div>

                <p className='text-slate-700 text-lg  my-14 mb-20 '>Artificial Intelligence (AI) and modern programming languages like TypeScript, Next.js, and Tailwind CSS
                    are transforming the digital landscape. AI empowers machines to perform tasks that mimic human intelligence,
                    revolutionizing industries through automation, decision-making, and personalized experiences. On the other hand,
                    TypeScript enhances JavaScript with type safety, making code more robust and maintainable. Next.js, a powerful
                    React framework, simplifies building server-rendered and static web applications, ensuring better performance and
                    scalability. Tailwind CSS streamlines UI development with utility-first classes, enabling developers to create
                    visually stunning designs quickly. Together, these technologies represent the cutting edge of innovation, blending
                    functionality and aesthetics seamlessly.</p>

            </div>
        </div>
    )
}

export default Feature
