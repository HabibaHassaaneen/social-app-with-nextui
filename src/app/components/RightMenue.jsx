import React from 'react';
import {Button,Checkbox,Card,User,RadioGroup, Radio , CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";
import IconClose from './../icons/IconClose';
import IconCakeCandles from './../icons/IconCakeCandles';
import FrindRequest from './FrindRequest';
import Birthdays from './Birthdays';
import UserMediaCard from './UserMediaCard';
import UserInformation from './UserInformation';
import Ad from './Ad';

export default function RightMenue ({UserId}){

    return(

<div className='flex p-0 flex-col gap-8 '>
{UserId?<>
<UserInformation UserId/>
<UserMediaCard UserId/>

 </>:null}
{/* card1 */}
<FrindRequest/>

{/* card2 */}
<Birthdays/>

{/* card3 */}
<Ad size={"md"}/>

</div>
    )

}