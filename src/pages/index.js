import React, { useState } from "react"
import { Header } from "../component/Header"
import Lolly from '../component/Lolly'
import { navigate } from "gatsby"

import { useQuery, gql, useMutation } from "@apollo/client"
import shortid from "shortid"

const GET_NOTES = gql`
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
`


const CREATE_NOTES = gql`
  mutation createNote($note: NoteInput!) {
    createNote(note: $note) {
      message
    }
  }
`


const Index = () => {

  const { data, loading } = useQuery(GET_NOTES)
  const [createNote] = useMutation(CREATE_NOTES)
  console.log("data from server", data)
  async function handleSubmit (){
    const note = {
      id: shortid.generate(),
  recepientName: "kuch bhi",
   message: "kuch bhi",
   senderName: "kuch bhi",
   flavourTop: "kuch bhi",
   flavourMiddle: "kuch bhi",
   flavourBottom: "kuch bhi",
   lollyPath: "kuch bhi",
    }
    console.log("Creating Lolly:", note)
    
    await createNote({
      variables: {
        note,
      },
      refetchQueries:[{query:GET_NOTES}]
    }
    
    )
  }
  
  return (
    <div>
      <Header></Header>
      <div className="listLollies">
    
      <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43" />
         

         
      <Lolly fillLollyTop="red" fillLollyMiddle="blue" fillLollyBottom="green" />
         


    </div>

    
    <input type="button" value="Create new Lolly"
    onClick={
      ()=>{
        navigate('/createNew');
      }
    }
    ></input>

    </div>
  )
}

export default Index
