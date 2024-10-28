
import React from 'react'
import {Button,Checkbox,Card,User,RadioGroup, Radio , CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";

import IconLocationDot from './../icons/IconLocationDot';
import IconBag from './../icons/IconBag';
import IconGraduationCap from './../icons/IconGraduationCap';
import IconLink from './../icons/IconLink';
import IconHeartSharp from './../icons/IconHeartSharp';

export default function UserInformation() {
  return (
    <Card>
    <CardHeader className="flex justify-between gap-3">
        <span className='text-gray-500 font-semibold text-xs'> User Information</span>
    <Link href="#" className=' text-xs'>See all</Link>
          </CardHeader>
          <CardBody className="flex justify-between gap-3" >
            <user className="flex justify-start gap-2">
             <span className={"sm:text-sm"}>
          Junior Garcia
            </span> 
             <Link href="https://twitter.com/jrgarciadev" size="sm" className="text-gray-500 text-sm" isExternal>
          @jrgarciadev
        </Link>
   

</user>
<p className='text-gray-600 text-xs'> Lorem, ipsum dolor sit amet consectetur adipisicing elit.😊</p>
<div className="flex flex-col items-start gap-4 ">
          <div className="inline-flex gap-1 items-center font-normal overflow-hidden  min-w-20 max-h-10 text-sm "> 
            <IconLocationDot fill="#9ca3af"/>
            <span className=" text-gray-500">Living in <b>place</b> </span>
            
          </div>
          <div className="inline-flex gap-1 items-center font-normal overflow-hidden  min-w-20  max-h-10 text-sm"> 
            <IconGraduationCap fill="#9ca3af"/>
            <span className=" text-gray-500">Went to <b>school</b> </span>
            
          </div>
          <div className="inline-flex gap-1 items-center font-normal overflow-hidden  max-h-10  text-sm"> 
            <IconBag fill="#9ca3af"/>
            <span className=" text-gray-500">Works at Apple <b>place</b> </span>
            
          </div>
          <div  className="flex items-center justify-between  gap-4">
          <div className="flex gap-1 items-center font-normal   min-w-20 text-sm  "> 
            <IconLink  />
            <Link
      isExternal
     
      href="https://github.com/nextui-org/nextui"
    
    >
      habiba
    </Link>
            
          </div>
          <div className="flex gap-1 items-center font-normal overflow-hidden  min-w-20 text-sm  "> 
            <IconHeartSharp fill="#9ca3af" />
            <span className=" text-sm  text-gray-500"> joined <span className="hidden lg:inline">novmber</span> 2024 </span>
         
          </div>
          </div>
          <Button color="primary" variant="shadow" className="w-full gap-4 place-self-center ">
     Following
      </Button>  
      <Link
      
     
      color="danger"
      className=" text-sm place-self-end"
    
    >
     Block user
    </Link>
            
        </div>
          </CardBody>
        </Card>
    
  )
}
