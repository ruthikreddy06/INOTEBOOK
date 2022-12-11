import React, { useContext } from 'react'
import MyContext from '../context/Createcontext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Addnote(props) {
     const [Add,setAdd]=useState({title:"",description:"",tag:""});
     const {addNote}=useContext(MyContext);
   
     const histroy=useNavigate();
    const onHandle=()=>{
        console.log(Add);
          addNote(Add);
          props.showalert("your notes added","success");
          histroy("/Note");

     }
    const  changes=(e)=>{
        setAdd({...Add,[e.target.name]:e.target.value})
     }
  return (
    <div className='coloring1'>
       <section className="vh-100 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5 headings">Addnote</h2>

              <form>

                <div className="form-outline mb-4">
                <label className="form-label headings" for="form3Example1cg">Title</label>
                  <input type="text" id="form3Example1cg" name="title" className="form-control form-control-lg" onChange={changes} />
                 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label headings" for="form3Example3cg" >description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="description" rows="10" onChange={changes}></textarea>
                 
                </div>

                <div className="form-outline mb-4">
                <label className="form-label headings" for="form3Example4cg">tag</label>
                  <input type="text" id="form3Example4cg"  name="tag" className="form-control form-control-lg" onChange={changes} />
                
                </div>



                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-secondary headings" onClick={onHandle}>AddNote</button>
                    </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Addnote