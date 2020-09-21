import React from 'react';
import { NavLink } from 'react-router-dom'
import AssignmentIcon from '@material-ui/icons/Assignment';
import BallotIcon from '@material-ui/icons/Ballot';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';



import '../Styles/nav_drawer.css'



export default function NavDrawer(props) {

    const ResumeLink = (props) => {

        return < NavLink to={'/hucksWare'} {...props} />;

    }


    const ProjectLink = (props) => {

        return < NavLink to={'/hucksWare/Projects'} {...props} />;

    }



    return (

        <Drawer elevation={20} variant='temporary' anchor={"left"} open={props.toggle} onClose={() => props.chaToggle(false)}>
            <List style={{ color: '#616161', fontFamily: 'Raleway' }} >
                <ListItem button component={ResumeLink} >
                    <ListItemIcon> <AssignmentIcon /> </ListItemIcon>
                    <ListItemText primary={"RESUME"} />
                </ListItem >

                <Divider variant={'middle'} />

                <ListItem button component={ProjectLink} >
                    <ListItemIcon> <BallotIcon /> </ListItemIcon>
                    <ListItemText primary={"PROJECTS"} />
                </ListItem>


                <Divider variant={'middle'} />






            </List>
        </Drawer>


    )
}
