import React, { useContext } from 'react'
import MyContext from '../context/Createcontext'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Notesitem(props) {
  const mycontext=useContext(MyContext);
  const [update,setupdate]=useState({etitle:"",edescription:"",etag:""});
 
  const {deleteNote}=mycontext;
  const Delete=(key)=>{
    const json=deleteNote(key);
    if(json.success==true){
    props.alert("your notes deleted","success");}
    else{
      props.alert("notes not deleted","danger");
    }
  }
  const  changes=(e)=>{
    setupdate({...update,[e.target.name]:e.target.value})
 }
  const [show, setShow] = useState(false);

  const handleSave = (key) =>{
    updatenotes(key);
    setShow(false);
          
  };
  const handleClose = () =>{
    
    setShow(false);
          
  };
  const handleShow = () =>{
    setShow(true);
    setupdate({etitle:props.Notes.title,edescription:props.Notes.description,etag:props.Notes.tag});

  }
  const url=`http://localhost:5000/api/note`
  const updatenotes=async (key)=>{
                 
    const response = await fetch(`${url}/updatedata/${key}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title:update.etitle,description:update.edescription,tag:update.etag})
    });
      console.log("updated");
      const json= await response.json(); 
      console.log(json);
  }
  return (
   
<div>
<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='headings'>editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>         <form>

<div className="form-outline mb-4">
<label className="form-label headings" for="form3Example1cg">Title</label>
  <input type="text" id="form3Example1cg" name="etitle" className="form-control form-control-lg" value={update.etitle} onChange={changes}/>
 
</div>

<div className="form-outline mb-4">
<label className="form-label headings" for="form3Example3cg" >description</label>
<textarea className="form-control" id="exampleFormControlTextarea1" name="edescription" rows="10" value={update.edescription}  onChange={changes}></textarea>
 
</div>

<div className="form-outline mb-4">
<label className="form-label headings" for="form3Example4cg">tag</label>
  <input type="text" id="form3Example4cg"  name="etag" className="form-control form-control-lg"  value={update.etag}  onChange={changes}/>

</div>

</form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary headings" onClick={()=>{handleClose()}}>
            Close
          </Button>
          <Button type="submit" variant="secondary headings" onClick={()=>{handleSave(props.Notes._id)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
<div className="card coloring4" style={{width:"18rem"}}>
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary headings">
    {props.Notes.tag}
  </span>
  <div className="card-body ">
 
    <h5 className="card-title headings">{props.Notes.title}</h5>
    <p className="card-text texts">{props.Notes.description}</p>
    <div className="d-flex justify-content-between">
    <Link> <i className="fa-solid fa-pen" onClick={()=>{handleShow()}}></i></Link>
    <Link> <i className="fa-solid fa-trash"  onClick={()=>{Delete(props.Notes._id)}}></i></Link>
    
</div>

    </div>
   
  </div>
</div>

  
  )                                
}
