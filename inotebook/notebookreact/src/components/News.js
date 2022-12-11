import React, { useEffect, useState,Component } from 'react'
import Spinner from './Spinner';
import Newitems from './Newitems';
function News(props) {
        const [s,sets]=useState({articles:[],loading:false})
        const [a,adda]=useState({articles:[]})
        let s1=[]
        let loading=false;
       
    const  OnClickNext=async()=>{
        sets({loading:true});
        if(s.pages<=s.count){
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5b9f1f03dc2741e7ba17b93a15f5ec08&page=${sets({pages:s.pages+1})}&pagesize=30`;
      
        let data=await fetch(url);
        let parseddata=await data.json();
        sets({loading:false});
        sets({articles:parseddata.articles,pages:s.pages+1});
       
        
    }
        else{
           sets({disable:false});
        }
    }  
    const  OnClickPrevious=async()=>{
        sets({loading:true});
        if(s.pages>1){
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5b9f1f03dc2741e7ba17b93a15f5ec08&page=${sets({pages:s.pages-1})}&pagesize=30`;

        let data=await fetch(url);
        let parseddata=await data.json();
        sets({loading:false});
        sets({articles:parseddata.articles,pages:s.pages-1});
        }
        else{
            sets({disable:true});
        }

    }  
      const  componentDidMount1=async()=>{
            sets({loading:true});
            loading=true;
            
            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5b9f1f03dc2741e7ba17b93a15f5ec08&page=1&pagesize=30`;
            let data=await fetch(url);
            let parseddata=await data.json();
            sets({articles:parseddata.articles,totalResults:parseddata.totalResults,pages:1,pagesize:9,count:0,disable:false,loading:false});
            sets({count:Math.ceil (parseddata.totalResults/9)});
            s1=parseddata.articles;

            console.log(s1);
            loading=false;
        }
        
       useEffect(()=>{
        componentDidMount1();
       },[]); 
  


  return (
    <div className="container my-4 bodycolor">
    <h1 className="text-center headingnames1" style={{margin:'40px 0px'}}><h1 className='headlines'>Top Headlines</h1></h1>
    {loading && <Spinner/>}
   <div className="row">
   {s1.map((elements)=>{
    return <div className="col-md-4 my-3">
    <Newitems title={elements.title!==null?elements.title.slice(0,73)+"...":"text not avaliable"} description={elements.description!==null?elements.description.slice(0,172)+"....":"text not avaliable"} imageUrl={elements.urlToImage} url={elements.url} source={elements.source.name} category={props.category} />
    </div>
   })}
  </div>
  </div>
  )
}

export default News