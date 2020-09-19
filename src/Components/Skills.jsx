import React from 'react';

import SliderComp from './SliderComp';

import '../Styles/skills.css'




const skillsList = {
    sets: [
        {
            sn: '1',
            type: 'Python',
            percent: 90
        },
        {
            sn: '2',
            type: 'JavaScript/Node',
            percent: 90
        },
        {
            sn: '3',
            type: 'Java',
            percent: 60
        },
        {
            sn: '4',
            type: 'React js/vr/Native',
            percent: 85
        },
        {
            sn: '5',
            type: 'Html5/Css3',
            percent: 90
        },
        {
            sn: '6',
            type: 'Ethical Hacking',
            percent: 80
        },
        {
            sn: '7',
            type: 'Sql/Databases',
            percent: 90
        },
        {
            sn: '8',
            type: 'Non Relational Db',
            percent: 70
        },
        {
            sn: '9',
            type: 'Rest Api',
            percent: 90
        },
        {
            sn: '10',
            type: 'Git',
            percent: 90
        },
        {
            sn: '11',
            type: 'GoogleApis',
            percent: 70
        },
        {
            sn: '12',
            type: ' Websockets',
            percent: 90
        },
        {
            sn: '13',
            type: ' Deployment',
            percent: 80
        },
        {
            sn: '14',
            type: 'AWS Services',
            percent: 65
        }




    ]
}




const showSet = skillsList.sets.map(singleSkill => {

    return <div key={singleSkill.sn}>
        <SliderComp skill={singleSkill.type} percent={singleSkill.percent} />
    </div>
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
