import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { Header } from "../component/Header"
// import Lolly from '../component/Lolly'


const GET_GREETING = gql`
  query {
    listNotes {
      id
  recepientName
   message
   senderName
   flavourTop
   flavourMiddle
   flavourBottom
   lollyPath
        

  }
  }
`;

const url =
process.env.NODE_ENV === "development"
  ? "http://localhost:8000/"
  
  : "https://virtuallollyaws.netlify.app/";


const WaitingArea = () => {
    const {loading, error, data} = useQuery(GET_GREETING)
    console.log("data from server",data)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
    
    return (
        <div className="container">
            <Header></Header>
            <p>your new lolly is freezing. you can get it in a while at

            URL : <a href={`${url}${data.listNotes[data.listNotes.length-1].lollyPath}`}
      >{`${url}${data.listNotes[data.listNotes.length-1].lollyPath}`}</a>   
            </p>
            
        </div>
    )
}


export default WaitingArea;