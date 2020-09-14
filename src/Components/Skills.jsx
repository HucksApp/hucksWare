import React,{useState} from 'react';

import SliderComp from './SliderComp';

import '../Styles/skills.css'




const skillsList = { sets:[
            {
                type:'Python',
                percent: 90
            },
            {
                type:'JavaScript/Node.js',
                percent: 90
            },
            {
                type:'Java',
                percent: 60
            },
            {
                type:'React.js/React-Native',
                percent: 85
             },
             {
                type:'Html5/Css3',
                percent: 90
            },
             {
                type:'Ethical Hacking',
                percent: 80
            },
            {
                type:'Sql/Databases',
                percent: 90
            },
            {
                type:'Non Relational Db',
                percent: 70
            },
            {
                type:'Rest Api',
                percent: 90
            },
            {
                type:'Git',
                percent: 90
            },
            {
                type:'GoogleApis',
                percent: 70
            },
            {
                type:' Websockets',
                percent: 90
            },
            {
                type:' Deployment',
                percent: 80
            },
            {
                type:'AWS Services',
                percent: 65
            }
            
           
            

]
}




const showSet = skillsList.sets.map( singleSkill =>{

                            return <SliderComp skill={singleSkill.type} percent={singleSkill.percent}   />
})





const Skills = () => {

    
    return (
        <div className='skillsContain'>
            <div className="underlineTrans">
            <h1>SKILL SETS</h1>
            <p className='underline'></p>
            </div>
            <div>
                {showSet}
            </div>
            
            
        </div>
    );
}

export default Skills;
