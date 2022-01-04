import React,{useState} from 'react'
import './Grid.css' 

import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.jpg'
import img6 from '../Images/img6.jpg'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'
import img9 from '../Images/img9.jpg'


function Grid() {  

    var imgUrl = "";

     const [tempImg, setTempImg] = useState(''); 
     const [model, setModel] = useState(false); 
     const [current, setCurrent] = useState(0); 
     const [ tempId, setTempId] = useState(0); 
     const [hi, setHi] = useState(0); 
    

     const getImg = (imgSrc,id,index) =>{  
         setModel(true); 
         imgUrl = imgSrc; 
         setTempImg(imgSrc); 
         setTempId(id) 
         setCurrent(index) 
       
         console.log(imgUrl,id,"index",current ,"tempid",current);

    }


     let ImgData = [ 

            { 
                id :1, 
                imgSrc: img1,

            },

            { 
                id :2, 
                imgSrc: img2,

            },
             
            { 
                id :3, 
                imgSrc: img3,

            }, 

            { 
                id :4, 
                imgSrc: img4,

            },

            { 
                id :5, 
                imgSrc: img5,

            },

            { 
                id :6, 
                imgSrc: img6,

            },
            { 
                id :7, 
                imgSrc: img7,

            },

            { 
                id :8, 
                imgSrc: img8,

            },

            { 
                id :9, 
                imgSrc: img9,

            },

            { 
                id :10, 
                imgSrc: img9,

            },

            

     ] 


    const nextSlide = () => { 

        setCurrent( current === length -1 ? 0 : current+1) 


        {ImgData.map((item, index)=>{  

            return ( 
                
                                 
        //    <div className="image-box" key={index}  onClick={()=>getImg(item.imgSrc,item.id,index)} >   
             
               <div>
                    {console.log("hola",index)}  
                    {index === current && (
                       setTempImg(item.imgSrc)
                    )}
            
                </div>  

            ) 

       })}
         
         
    } 


    const prevSlide = () => { 

        setCurrent( current === 8 ? length - 1 : current- 1) 

         
         
    }


     let length = ImgData.length;  
  

    //  console.log(current)

    //  if(!Array.isArray(ImgData) || length <= 0){ 

    //     return null; 
    //  }
     

    return ( 

        
        <div className="image-gallery">    

        {console.log("length",length)}

             <div className={model ?"model open" : "model"}> 

            
               <img src={tempImg}/> 

              


               {/* <i class="fas fa-times" onClick={()=> setModel(false)}></i>  */}

               <i class="fas fa-chevron-left" onClick={nextSlide}></i> 

              
             </div>
    
           {ImgData.map((item, index)=>{  

                return ( 
                    
                   
                    
               <div className="image-box" key={index}  onClick={()=>getImg(item.imgSrc,item.id,index)} >   
                 
                  {/* <i class="fas fa-chevron-left" onClick={nextSlide}></i>   */}

                        {/* {console.log("hi",index,"jj",item.id)}  */}
                    
                       <img  src={item.imgSrc} style={{width:'100%' , height:"300px"}} /> 

                       <div className="overlay"> 
                        <div className="details" >  

                            <h3 className="title"> 
                                <a href="">Your title</a>
                            </h3> 

                            <span  className="category"> 
                                <a href="">category</a>       
                            </span>

                        </div>

                    </div>    


                    </div>  

                ) 
 


           })}
            
            <div className="image-box">  
            <img src="Guat-10.jpeg" />   

                    <div className="overlay"> 
                        <div className="details" >  

                            <h3 className="title"> 
                                <a href="">Your title</a>
                            </h3> 

                            <span  className="category"> 
                                <a href="">category</a>       
                            </span>

                        </div>

                    </div>   

            </div>  

           
          

          
            
        </div>

        
    )
}

export default Grid
