import React,{ useContext } from "react";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { ContainerComment } from "./style";

const handleDate = (str: string) => {
  const strSplit = str.split("-")
  const dayAndTime = strSplit[2].split("T")
  const time = dayAndTime[1]
  const day = dayAndTime[0]
  const year = strSplit[0]
  const month = strSplit[1]

  return day+"/"+month+"/"+year
}

const CommentList = () => {
    const user = true
    const {comments, uniqueVehicle, postComments} = useContext(AnnounceContext)
    // const comments = uniqueVehicle.comments
    console.log(comments);
    
    const handleComment = () =>{
    const result = comments.map(comment =>{
      if (user){
        return (
          <ContainerComment key={comment.id} id={comment.id} className="containerComment">
            
          <div className="userData">
            <figure className="userPhoto">
              <img src={comment.user.image}/>
            </figure>
            <p>{comment.user.completeName}</p>
            <p className="date">
              {handleDate(comment.createdAt)}
            </p>
          </div>
          <p className="text">
          {comment.text}
          </p>
          <div className="edit">

          <button>Editar</button>
          </div>
          </ContainerComment>
        )
      }  
      return (
        <ContainerComment key={comment.id} id={comment.id} className="containerComment">
          
        <div className="userData">
          <figure className="userPhoto">
            <img src={comment.user.image}/>
          </figure>
          <p>{comment.user.completeName}</p>
          <p className="date">
            {handleDate(comment.createdAt)}
          </p>
        </div>
        <p className="text">
        {comment.text}
        </p>
        </ContainerComment>
      )    
    })
    return result
  }
    
    if(user){

      return (
        <div>
        <h3>Comentários</h3>
        <label>
          Insira seu comentário
          <input type="text" />
          <button onClick={()=> postComments(uniqueVehicle.id)}>Comentar</button>
        </label>
        {handleComment()}
      </div> 
        )
      }
      return (
        <div>
        <h3>Comentários</h3>
        {handleComment()}
      </div> 
        )
  };
  
  export default CommentList;