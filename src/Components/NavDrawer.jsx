import React,{useState} from 'react';

import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';



import '../Styles/nav_drawer.css'



const useStyles = makeStyles({
                        list:{
                            width: 600
                        },
                        fullList:{
                            width: 600
                        }
})


export default function NavDrawer( props ) {
    const classes = useStyles();



   

  return (
    
      <Drawer variant='temporary' anchor={"left"} open={props.toggle}  onClose={()=> props.chaToggle(false) }>
       
        
       </Drawer>

    
  )
}
