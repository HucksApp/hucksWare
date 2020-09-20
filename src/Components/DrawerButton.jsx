import React, { useState } from 'react';

import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import CloseIcon from '@material-ui/icons/Close';



import NavDrawer from './NavDrawer';




const DrawerButton = () => {


    const [drawer, openDrawer] = useState(false)



    const handleRouteChange = () => {

        openDrawer(true)

    }



    let menubtn;

    if (drawer === true) {
        menubtn = <CloseIcon style={{ fontSize: 40, color: '#616161' }} />
    } else if (drawer === false) {
        menubtn = <MenuTwoToneIcon style={{ fontSize: 40, color: '#616161' }} />
    }





    return (
        <div >
            <NavDrawer toggle={drawer} chaToggle={openDrawer} />
            <div onClick={handleRouteChange}>
                {menubtn}
            </div>
        </div>
    );
}

export default DrawerButton;
