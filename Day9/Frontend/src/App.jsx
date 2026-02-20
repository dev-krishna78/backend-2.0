import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([])


   function fetchNotes() {
    axios.get("https://backend-2-0-pd3y.onrender.com/api/notes")
    .then((res)=>{
      setNotes(res.data.notes)
    })
  }

  useEffect(()=>{
    fetchNotes()
  })


  function handleSubmit(e){
      e.preventDefault()

      const {title, description} = e.target.elements

      console.log(title.value,description.value)
    
      axios.post("https://backend-2-0-pd3y.onrender.com/api/notes",{
        title:title.value,
        description: description.value
      })

      .then(res =>{
        console.log(res.data)

        fetchNotes()

      })
    }



    function handleDeleteNote(noteId){
      axios.delete("https://backend-2-0-pd3y.onrender.com/api/notes/"+noteId)
      .then(res=>{
        console.log(res.data)
        fetchNotes()
      })
    }

    function handleUpdateNote(noteId){

      const newDescription = prompt("enter new description")

      if(!newDescription) return;

      axios.patch("https://backend-2-0-pd3y.onrender.com/api/notes/"+noteId,{
        description:newDescription
      }
     )

      .then(res =>{
      console.log("update",res.data)
       fetchNotes();
      })
    }
    

 

  return (
      <>
       
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter title' />
        <button>Create note</button>

      </form>

       <div className='notes'>
       
       {notes.map((note,idx)=>{
        
        return(<div id={idx} className='note'>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={()=>{handleDeleteNote(note._id)}}>delete</button>

        <button onClick={()=> handleUpdateNote(note._id)}> Update Description</button>
      </div>)
          }
       )}

    </div>
      </>
  )
}

export default App