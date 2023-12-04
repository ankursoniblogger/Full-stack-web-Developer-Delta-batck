import { useState } from "react"


export default function LikeButton(){
    const [isLike , setIsLike] = useState(false)

    function toggleLike(){
        setIsLike(!isLike)
    }

    const likeStyle = {color: "red" }
    return(
        <>
            <h1 onClick={toggleLike} >
            {
                isLike ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>
            }
            </h1>
        </>
    )
}