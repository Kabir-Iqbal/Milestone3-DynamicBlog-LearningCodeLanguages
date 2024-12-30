import React from 'react'
import Image from 'next/image';
import {Card , CardContent , CardTitle} from "../components/card"
import Link from 'next/link';

interface BlogcardProps {
    post : {id : string , name : string, title : string, description : string , date : string , image :string };
    isDarkbackground : boolean;
}


function BlogCard({ post , isDarkbackground} : BlogcardProps ) {
  return (
    <Card className={`p-4 my-1 ${isDarkbackground? 'bg-slate-800 text-white' : 'text-slate-800' } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 `} >
      <Image className='w-full h-48 object-cover rounded-t-lg ' 
      src={post.image} alt={post.title} width={392} height={192} />


     <CardTitle className='text-xl font-normal mt-4 text-center' > {post.name} </CardTitle>
     <br/>

     <CardContent className='text-center' >
        <p>{post.title} </p>
     </CardContent>

     <div className='flex flex-col items-center mt-4' >
       <p className={`text-sm mb-2 ${isDarkbackground? 'text-slate-400' : 'text-slate-600' } `} >
         Published on : {( new Date  (post.date).toLocaleDateString() )}
          </p>

     <Link href={`${post.id} `}
      className={`w-full px-6 text-center py-2 text-white bg-blue-600 rounded hover:bg-blue-500 ${isDarkbackground? 'bg-black hover:bg-red-500' : 'bg-black hover:bg-red-500' } `} >
     Read more
     </Link>

     </div>

    </Card>
  )
}

export default BlogCard
