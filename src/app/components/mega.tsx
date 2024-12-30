import React from "react"
import BlogCard from "./BlogCard"
import { Posts } from "./post"

function Mega(){




return (
    <div className="my-8 " >
        <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change "> Exploring thi world of AI and Technology </h1>
        <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
            {Posts.map((post, index) => (
                <div className="fade-in" key={post.id} >
                    <div className="blog-card ">
                        <BlogCard post={post} isDarkbackground={index % 2 === 0} />
                    </div>

                </div>
            ))}
        </div>
    </div>
)
}

export default Mega
