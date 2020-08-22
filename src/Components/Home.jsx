import React,{ useState } from 'react'


import HomeDark from './HomeDark'


export default function Home() {
  

  


  const [home_dark, update_home] = useState(true);
  let home;
  console.log(home_dark)
  if(home_dark === true){
    console.log("here")
        home = <HomeDark/>;
  }else{

      home = "";
  }
  

  return (
    <div>
      {home}
    </div>
   
  )
}

