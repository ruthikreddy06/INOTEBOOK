import React from 'react'
import Green from './Green.jpg'
import Science from './science.jpg'
import Sports from './sports.jpg'
import technology from './technology.jpg'
import entertainment from './entertainment.jpg'
import business from './business.jpg' 
import health from './health.jpg'

function Newitems(props) {
  const cardcoloring=()=>{
    if(props.category==="science"){
      return "coloringscience"
    }
    else if(props.category==="technology"){
      return "coloringtechnology"
    }
    else if(props.category==="health"){
      return "coloringhealth"
    }
    else if(props.category==="general"){
      return "coloring"
    }
    else if(props.category==="entertainment"){
      return "coloringentertainment"
    }
    else if(props.category==="business"){
      return "coloringbusiness"
    }
    else if(props.category==="sports"){
      return "coloringsports"
    }
  }
  const photoselection=()=>{
    if(props.category==="science"){
      return Science
    }
    else if(props.category==="technology"){
      return technology
    }
    else if(props.category==="health"){
      return health
    }
    else if(props.category==="general"){
      return Green
    }
    else if(props.category==="entertainment"){
      return entertainment
    }
    else if(props.category==="business"){
      return business
    }
    else if(props.category==="sports"){
      return Sports
    }
  }
  console.log("i am newitem")


  return (
    <div className={"card "+cardcoloring()}  style={{width:"18rem"}}>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{props.source}
</span>
      <img className="w3-image" src={props.imageUrl!=null?props.imageUrl:photoselection()}  alt="img not avaliable"/>
<div className="card-body">
<h5 className="card-title headingnames1">{props.title}</h5>
<p className="card-text headingnames">{props.description}</p>
<a href={props.url} className="btn btn-sm btn-dark" >read more</a>
</div>
</div>
  )
}

export default Newitems