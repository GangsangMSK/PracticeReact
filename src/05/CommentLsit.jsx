import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "학생A",
        comment: "A 학생입니다."
    },
    {
        name: "학생B",
        comment: "B 학생입니다."
    },
    {
        name: "학생C",
        comment: "C 학생입니다."
    }
        
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}
export default CommentList;