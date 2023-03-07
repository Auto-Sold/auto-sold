import React,{ useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { userContext } from "../../contexts/userContext";
import CreateComment from "../CreateCommentForm";
import { ContainerComment, DivComment } from "./style";

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
    const {idAnnounce} = useParams()
    const token = window.localStorage.getItem("@TOKEN" as string)
    const userId = window.localStorage.getItem("@ID" as string)
    const user = true
    const {comments, uniqueVehicle, postComments, getComments, loadComment} = useContext(AnnounceContext)
    const {objUser} = useContext(userContext)
    // const comments = uniqueVehicle.comments
    const vehicleID = uniqueVehicle.id;

    useEffect(()=> {
      getComments(idAnnounce)
     
    },[loadComment])
    if(loadComment){
      return(
        <>
        <p>Carregando comentários...</p>
        </>
      )
    }

    const handleComment = () =>{
    const result = comments.map(comment =>{
      if (comment.user.email == objUser.email){
        return (
          <ContainerComment key={comment.id} id={comment.id}>
            
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

    console.log(comments)
    
      return (
        <DivComment>
        <h3>Comentários</h3>
        <CreateComment/>
        {
        
        handleComment()}
      </DivComment> 
        )
    }
  
  export default CommentList;