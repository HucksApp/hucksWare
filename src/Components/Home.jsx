import React,{ useEffect, useState } from 'react'




import HomeDark from './HomeDark'
import HomeMain from './HomeMain'





export default function Home() {





  const [home_dark, update_home] = useState(true);
  let home;


/*
  const handleScroll = () => {
    update_home(!home_dark)
        
  }
  

useEffect(()=>{

     window.addEventListener("scroll",handleScroll)
     return window.addEventListener("scroll", handleScroll)


})



*/
  console.log(home_dark)
  if(home_dark === true){
        home = <HomeDark  update_home= {update_home} d_state ={home_dark} />;
  }else if(home_dark === false){

      home = <HomeMain update_home= {update_home} d_state ={home_dark} />
  }
  

  return (
    <div >
      {home}
    </div>
   
  )
}

