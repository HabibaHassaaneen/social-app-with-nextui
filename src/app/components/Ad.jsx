

import React from 'react'
import {Image,Button,Card,Avatar,Radio , CardHeader, CardBody, CardFooter, Link,User } from "@nextui-org/react";
import IconClose from './../icons/IconClose';
import IconCakeCandles from './../icons/IconCakeCandles';
import IconThreeDotsVertical from './../icons/IconThreeDotsVertical';

export default function Ad({size}) {
  return (
<Card>
<CardHeader className="flex justify-between gap-3">
    <span className='text-gray-500 font-semibold text-sm'> Sponsored Ads</span>
    <Link color="primary" >
    <IconThreeDotsVertical/>
    </Link> 
  
      </CardHeader>
      <CardBody className="flex flex-col justify-between gap-7 flex-wrap" >
  <div className="flex justify-center"> 
            <Image
            fill
              alt="Card background"
              className={`object-cover rounded-xl  w-full     ${size==="sm"?"h-24":"h-48"}`}
                            src="https://img.freepik.com/premium-photo/national-fragrance-day_605905-14372.jpg"
            />
         </div>
  
 
 <User   className="flex justify-stretch" 
       description={(
        <Link href="https://twitter.com/jrgarciadev" size isExternal>
          @jrgarciadev
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
      }}
    />

 
<p className={`text-xs`} >
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus praesentium alias officiis doloremque obcaecati autem eos iste itaque, cumque ex, distinctio vitae eveniet. Esse corporis tenetur unde facere odio?</p>

  <Button fullWidth className={`text-xs text-gray-500`}>Learn more</Button>

    
      </CardBody>
    </Card>
  )
}


