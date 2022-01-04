import React, {useState} from 'react'  
import HeroSection from '../HeroSection/HeroSection'
import './PNavBar.css'
// import Image from '../picGrid/Image'


function PNavBar() { 

     
   const [model, setModel] = useState(false); 
   const [ tempImgSrc, setTempImgSrc] = useState('');
   
   const getImg = (imgsrc)=> {  
       
    setTempImgSrc(imgsrc);
    setModel(true); 
    console.log(imgsrc,model)

   }


    return (
    <> 
      <input type="checkbox" id="cancel-btn" /> 
   
      <div className="resTitle"> 
          
          <div className="barItem"> 
               
               <h3 className="NavItemi">DMZ</h3>
               <h3 className="NavItem">Photography |</h3> 
               <h3 className="NavItem">Creative</h3>
   
         </div>
   
         <div className="barItem"> 
            
              <label for="cancel-btn" className="btn cancel-btn"> <i className="fas fa-times"></i></label>
           
         </div>
   
          </div>
   
         

      <div className="Wbarinit">    

      <div className="resBar" >  

        <div className="barItem"> 
            
              <h3 className="NavItemi">DMZ</h3>
              <h3 className="NavItem">Photography |</h3> 
              <h3 className="NavItem">Creative</h3>

        </div>

        <div className="barItem"> 
           
             <label for="cancel-btn" className="btn cancel-btn"> <i className="fas fa-times"></i></label>
          
        </div>

      </div>

        <ul className="Sidelist">  
                
                 

                  <li className="ListItem">Portfolio </li>
                  <li className="ListItem">Commisions </li>
                  <li className="ListItem">Video </li>
                  <li className="ListItem"> Travel </li>
                  <li className="ListItem">Prints </li>
                  <li className="ListItem">DMZ </li>
                  <li className="ListItem"> <i class="fab fa-opencart"></i></li>
                

        </ul> 

        {/* <label for="" className="btn cancel-btn"> <i className="fas fa-times"></i></label> */}

        </div> 



    <div className="Wbar">  

   

          <div className="WbarOne"> 
             
            <h3 className="NavItemi">DMZ</h3>
            <h3 className="NavItem">Photography |</h3> 
            <h3 className="NavItem">Creatives</h3>

          </div> 

          <div className="WbarTwo"> 

            <ul className="TopList">  
                    
                      <label for="" className="btn cancel-btn"> <i className="fas fa-times"></i></label>

                      <li className="ListItem">Portfolio </li>
                      <li className="ListItem">Commisions </li>
                      <li className="ListItem">Video </li>
                      <li className="ListItem"> Travel </li>
                      <li className="ListItem">Prints </li>
                      <li className="ListItem">DMZ </li>
                      <li className="ListItem"> <i class="fab fa-opencart"></i></li>
                     

            </ul> 

            <label for="" className="btn cancel-btn"> <i className="fas fa-times"></i></label>

          </div> 

            
            
        </div>  {/* NavBar Ending */}

        
        <div className="SubHero">   

                <h1 className="ListItem">Portfolio</h1> 
                <h3 className="ListItem">For Full Services Click Here</h3>
               

        </div> {/* subhero Ending */} 
        
        
        
        <div className="Gallery">  
        

          <div className={model? "model open" : "model"}> 
                                       <img  src={tempImgSrc}/>
                                       <i class="fas fa-times" onClick={()=> setModel(false)}></i>
           </div> 

           
             <div className="pics" onClick={()=>getImg("Guat-10.jpeg") } >    
            
                           

                            <h3 className="catItem"> Adventure and LifeStyle </h3> 
                            <img    src="Guat-10.jpeg" style={{width:'100%', height:"300px"}} /> 
                            

            </div>  


            <div className="pics" onClick={()=>getImg("Guat-10.jpeg") } >   

                          <h3 className="catItem"> Portrait & Fashion </h3> 
                            <img    src="Guat-10.jpeg" style={{width:'100%' , height:"300px"}} /> 

             </div>  

             <div className="pics" onClick={()=>getImg("Guat-10.jpeg") } >  

                        <h3 className="catItem">Interior & Product</h3> 
                       <img    src="Guat-10.jpeg" style={{width:'100%' , height:"300px"}} /> 
              </div> 

              <div className="pics" onClick={()=>getImg("Guat-10.jpeg") } >    
                     
                            <h3 className="catItem"> Automotive</h3> 
                          <img    src="Guat-10.jpeg" style={{width:'100%' , height:"300px"}} /> 
                       </div> 
             
              
                                        
        </div>   


     


     
       
       <div className="Footer" > 
                
                <div> 
                <i className="far fa-envelope"></i> 
                <i className="fab fa-instagram"></i>

               </div>

                </div>
                              
                


        </>
    )
}

export default PNavBar
