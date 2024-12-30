import CommentSection from "@/app/components/CommentSection."
import Author from "@/app/components/authorCard"
import { title } from "process"
import Image from "next/image"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"


const posts = [
    {
        id: "1",
        title: "HTML (Hyper markup language) ",
        date: "12/27/2024",
        image: "/images/html.jpeg",
        description: "What is HTML? \n HTML is a markup language, which means it is used to label or mark up content so that a browser can display it correctly ",
    },
    {
        id: "2",
        title: "HTML (Hyper markup language) ",
        date: "12/27/2024",
        image: "/images/html.jpeg",
        description: "What is HTML? \n HTML is a markup language, which means it is used to label or mark up content so that a browser can display it correctly ",

    },
    {
        id: "3",
        title: "HTML (Hyper markup language) ",
        date: "12/27/2024",
        image: "/images/html.jpeg",
        description: "What is HTML? \n HTML is a markup language, which means it is used to label or mark up content so that a browser can display it correctly ",

    },
    {
        id: "4",
        title: "HTML (Hyper markup language) ",
        date: "12/27/2024",
        image: "/images/html.jpeg",
        description: "What is HTML? \n HTML is a markup language, which means it is used to label or mark up content so that a browser can display it correctly ",

    },
]

export default function Post({params} : { params: {Id: string } }) {
    const { Id } = params;
    const post = posts.find((p) => p.id === Id)





    if (!post) {
        return (
            <div className="text-2xl font-bold text-center mt-10 " > Post Not Found </div>
        )
    }
    const renderParagraphs = (description: string) => {
        return description.split("/").map((para, index) => (
            <p key={index} className="mt-4 text-justify" >
                {para.trim()}
            </p>
        ))}


        return (
            <div className="max-w-3xl mx-auto p-5 " >
                <h1 className=" md:text-4xl font-bold text-red-600 text-center " > {" "} {post?.title} </h1>
                {post?.image && (
                    <Image className="w-full h-auto rounded-md mt-4"
                        src={post.image} alt={post.title} width={400} height={400} />
                )}

                <CommentSection postId={post?.id} />
                <Author />
            </div>

        )
    }