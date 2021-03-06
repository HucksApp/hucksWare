import React from 'react';



import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ForwardIcon from '@material-ui/icons/Forward';


const WorkPlace = ({ work }) => {
    return (
        <div className="work" key={work.sn} >
            <Card style={{ maxWidth: 400, fontSize: '30px', height: 550 }} elevation={6}>
                <CardHeader
                    style={{ color: '#616161' }}
                    title={work.company}
                />
                <CardMedia
                    image={work.thumb}
                    style={{ height: 200, maxWidth: 400, margin: 0 }}
                />
                <CardHeader
                    style={{ color: '#616161', backgroundColor: '#ededed', marginTop: 10 }}
                    avatar={<work.avatar style={{ color: '#616161', fontSize: '50px' }} />}
                    subheader={work.period}
                    title={work.position}
                />
                <CardContent>

                    <List style={{ color: '#616161' }}>
                        <ListItem >
                            <ListItemIcon><ForwardIcon tyle={{ color: '#616161', fontSize: '40px' }} /> </ListItemIcon>
                            <ListItemText primary={work.message1} />

                        </ListItem>
                        <ListItem>
                            <ListItemIcon><ForwardIcon tyle={{ color: '#616161', fontSize: '40px' }} /> </ListItemIcon>
                            <ListItemText primary={work.message2} />

                        </ListItem>
                    </List>

                </CardContent>


            </Card>
        </div>
    );
}

export default WorkPlace;
