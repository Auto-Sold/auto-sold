import React,{ useContext } from "react";
import { AnnounceContext } from "../../contexts/AnnounceContext";


const CommentList = (vehicles: any) => {
    const user = true
    const {listComments} = useContext(AnnounceContext)
  

   
   
    return (
      <div>
        <h3>Comentários</h3>
        
      </div>
        
       
    )
  };
  
  export default CommentList;