"use client"
import { useState } from "react";
import React from "react";
import { Card, CardContent } from "./card";
import { Input1 } from "./input";
import { Button } from "./button";
import { text } from "stream/consumers";
import { comment } from "postcss";

interface Comment {
    id: string;
    author: string;
    text: string;
}

interface CommentSectionProps {
    postId: string
}


export default function CommentSection({ postId }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setnewComment] = useState("");
    const [authorName, setauthorName] = useState(" ");
    const [editingCommentId, seteditingCommentId] = useState<string | null>(null)


    const handleAddComment = () => {
        if (newComment.trim() && authorName.trim()) {

            const newCommentobj: Comment = {
                id: new Date().toISOString(),
                author: authorName,
                text: newComment,
            };

            setComments([...comments, newCommentobj]);
            setnewComment(" ");
            setauthorName(" ");
        }
    };


    const handleEditComment = (commentId : string) => {
    
            const updateComments = comments.find((comment)=> comment.id === commentId )

         if (updateComments ) {
            
            setnewComment(updateComments.text);
            setauthorName(updateComments.author);
            seteditingCommentId(updateComments.id);
         }  
        };
    

    const handleSavededitComment = () => {
        if (newComment.trim() && authorName.trim() && editingCommentId) {
            const updatedComments = comments.map((comments) => comments.id === editingCommentId ?
                { ...comments, text: newComment, author: authorName } : comments);

            setComments(updatedComments);
            setnewComment(" ");
            setauthorName(" ");
            seteditingCommentId(null)
        }
    }

    return (
        <div className="mt-8" >
            <h2 className="text-2xl font-semibold "> Comments</h2>

            <div className="mt-4 space-y-4" >
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <Card key={comment.id} >
                            <CardContent className="p-4" >
                                <div className="font-semibold"> {comment.author}</div>
                                <p> {comment.text}</p>

                                <Button onClick={() => handleEditComment(comment.id)} className="mt-2 text-blue-500" >
                                    Edit
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-slate-400 "> No comments yet </p>
                )
                }
            </div>




         <div className="mt-6" >
          <Input1  className= "w-full mb-2"
          type="text" value={authorName} onChange={(e)=> setauthorName(e.target.value)} placeholder= 'Your name'  />
         </div>

         
         <div className="mt-6" >
          <Input1  className= "w-full mb-2"
          type="text" value={newComment} onChange={(e)=> setnewComment(e.target.value)} placeholder="Add a comment"  />
         </div>

         <Button className="mt-4" onClick={editingCommentId ? handleSavededitComment : handleAddComment }>
             {editingCommentId?  "save" : "Submit" }
         </Button>


        </div>
    )
}
