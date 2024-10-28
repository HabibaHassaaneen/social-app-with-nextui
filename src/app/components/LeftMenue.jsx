import React from 'react';
import ProfileCard from './ProfileCard';
import Shortcuts from './Shortcuts';
import Ad from './Ad';

export default function LeftMenue ({type}){

    return(

<div className="flex flex-col gap-6" >{type==="home"&&<ProfileCard/>}


<Shortcuts/>
<Ad/>
 </div>
    )

}