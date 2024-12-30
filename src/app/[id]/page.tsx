import CommentSection from "@/app/components/CommentSection."
import Author from "@/app/components/authorCard"
import Image from "next/image"
import { Posts } from "../components/post"




export default function Post({ params }: { params: { id: string } }) {
    const { id } = params;
    const post = Posts.find((p: any) => p.id === id)


    if (!post) {
        return (
            <div className="text-2xl font-bold text-center mt-10 " > Post Not Found </div>
        )
    }
    const renderParagraphs = (description: string) => {
        return description.split("/n").map((para, index) => (
            <p key={index} className="mt-4 text-justify" >
                {para.trim()}
            </p>
        ))
    }


    return (
        <div className="max-w-3xl mx-auto p-5 " >
            <h1 className=" md:text-4xl font-bold text-red-600 text-center " > {" "} {post?.title} </h1>
            {post?.image && (
                <Image className="w-full h-auto rounded-md mt-4"
                    src={post.image} alt={post.title} width={400} height={400} />
            )}

            <div className="text-lg mt-6 text-slate-700 " >
                {renderParagraphs(post.description)}
            </div>

            <CommentSection postId={post?.id} />
            <Author />
        </div>

    )
}