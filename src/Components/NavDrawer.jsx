import React,{useState} from 'react';


import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactsIcon from '@material-ui/icons/Contacts';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';


import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';



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

    const  handleChangeDark = () => {
        props.update_home(true)
    }

    const  handleChange = (ref) => {
        
            ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            duration: "5000"
          })

          
    }

   

  return (
    
      <Drawer elevation={25} variant='temporary' anchor={"left"} open={props.toggle}  onClose={()=> props.chaToggle(false) }>
       <List style={{color:'#616161',fontFamily:'Raleway'}} divider>
           <ListItem button  onClick={handleChangeDark}>
               <ListItemIcon> <HomeIcon/> </ListItemIcon>
                <ListItemText primary={"HOME"}/>
           </ListItem>
           <Divider variant={'middle'}/>
           <ListItem button  onClick={ () => handleChange(props.aboutRef) }>
               <ListItemIcon> <PersonIcon/> </ListItemIcon>
                <ListItemText primary={"ABOUT"}/>
           </ListItem>
           <Divider variant={'middle'}/>
           <ListItem button  >
               <ListItemIcon> <FormatPaintIcon/> </ListItemIcon>
                <ListItemText primary={"SKILLS "}/>
           </ListItem>
           <Divider variant={'middle'}/>
           <ListItem button  >
               <ListItemIcon> <WorkIcon/> </ListItemIcon>
                <ListItemText primary={"EXPERIENCE"}/>
           </ListItem>
           <Divider variant={'middle'}/>
           <ListItem button  >
               <ListItemIcon> <DescriptionIcon /> </ListItemIcon>
                <ListItemText primary={"RESUMÉ "}/>
           </ListItem>
           <Divider variant={'middle'}/>
           <ListItem button  >
               <ListItemIcon> <ContactsIcon/> </ListItemIcon>
                <ListItemText primary={"CONTACT "}/>
           </ListItem>
           
           
           
           


       </List>    
       </Drawer>

    
  )
}
