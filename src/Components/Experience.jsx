import React,{useState} from 'react';

import WorkPlace from './WorkPlace'

import '../Styles/experience.css'



import Feshcom from '../Images/feshcom.svg'
import  FeshcomAvatar from '@material-ui/icons/EmojiObjects';

import kp from '../Images/kp.svg'
import BuildIcon from '@material-ui/icons/Build';


import GroupWorkIcon from '@material-ui/icons/GroupWork';
import codementor from '../Images/codementor.jpeg'


import ApartmentIcon from '@material-ui/icons/Apartment';
import periscope from '../Images/periscope.svg'



const works = {
            workList :[
                {
                    sn: 1,
                     company: 'Feshcom Tech',
                     thumb:Feshcom,
                     avatar: FeshcomAvatar,
                     position:'Software Developer/Freelance',
                     period:'March 2016 - July 2018',
                     message1:`Development of SMS and IVR systems for easy access to Family Planning.`,
                     message2:`Integration of Support systems for easy tracking of user needs.`
                
                },
                {
                    sn: 2,
                     company: 'K & p Engineering',
                     thumb:kp,
                     avatar: BuildIcon,
                     position:'I-T Supervisor',
                     period:'mar 2017 - Jan 2018',
                     message1:`Software troubleshooting and maintainance`,
                     message2:`Building and Integration of automation Softwares for Workshop Machines.`
                
                }
                ,
                {
                    sn: 3,
                     company: 'Codementor',
                     thumb:codementor,
                     avatar: GroupWorkIcon,
                     position:'Senior Freelance Software Engineer/Mentor',
                     period:'mar 2019 - Present',
                     message1:`Helps Mentees on Software-Development related issues.`,
                     message2:`Helps build ground-breaking/solution-oriented software in an efficient manner.`
                
                }
                ,
                {
                    sn: 4,
                     company: 'Periscope Engineering',
                     thumb:periscope,
                     avatar: ApartmentIcon,
                     position:'Software Engineer/IT Consultant',
                     period:'Nov 2018 - sep 2019',
                     message1:`Integration,Adaption,maintainance of Workstations Softwares.`,
                     message2:`Lead the Technical /Engineering team in building and maintaining software applications.`
                
                }
            ]

}


const workPlace = works.workList.map(work => {

            return  <div key={work.sn}>
                        <WorkPlace  work={work} />
                    </div> 

})


const Experience = ()=>{



    return (
        <div className='experience'>
            <div className="experienceHead">
            <h1>EXPERIENCE</h1>
            <p className='ex_underline'></p>
            </div>
            <div className='exp_work'>
            {workPlace}
            </div>
            
          
            
        </div>
    );
}

export default Experience;
