import React from 'react';
import { NavLink } from 'react-router-dom'
import WorkIcon from '@material-ui/icons/Work';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';



import '../Styles/nav_drawer.css'



export default function NavDrawer(props) {

    const BioLink = (props) => {

        return < NavLink to={'/hucksWare/Projects'} {...props} />;

    }


    const ProjectLink = (props) => {

        return < NavLink to={'/hucksWare/Projects'} {...props} />;

    }



    return (

        <Drawer elevation={20} variant='temporary' anchor={"left"} open={props.toggle} onClose={() => props.chaToggle(false)}>
            <List style={{ color: '#616161', fontFamily: 'Raleway' }} >
                <ListItem button component={BioLink} >
                    <ListItemIcon> <AccessibilityIcon /> </ListItemIcon>
                    <ListItemText primary={"BIO"} />
                </ListItem >

                <Divider variant={'middle'} />

                <ListItem button component={ProjectLink} >
                    <ListItemIcon> <WorkIcon /> </ListItemIcon>
                    <ListItemText primary={"PROJECTS"} />
                </ListItem>


                <Divider variant={'middle'} />






            </List>
        </Drawer>


    )
}
