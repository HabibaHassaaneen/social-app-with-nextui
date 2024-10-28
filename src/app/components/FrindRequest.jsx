import React from 'react'
import {Button,Checkbox,Card,User,RadioGroup, Radio , CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";
import IconClose from './../icons/IconClose';
import IconCakeCandles from './../icons/IconCakeCandles';

export default function FrindRequest() {
  return (
    <Card>
    <CardHeader className="flex justify-between gap-3">
        <span className='text-gray-500 font-semibold text-sm'> Frind Requests</span>
    <Link href="#">See all</Link>
          </CardHeader>
          <CardBody className="flex justify-between gap-3" >
            <div className="flex justify-between gap-3">
          <User   
          name="Jane Doe"
            avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
    <div className="flex gap-2" >
               <Checkbox defaultSelected color="primary"  radius="full" ></Checkbox>
               <Checkbox defaultSelected color="danger"  radius="full"  icon={<IconClose/>} ></Checkbox>
          </div>
      
     
        </div>
        <div className="flex justify-between gap-3">
          <User   
          name="Jane Doe"
            avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
    <div className="flex gap-2" >
               <Checkbox defaultSelected color="primary"  radius="full" ></Checkbox>
               <Checkbox defaultSelected color="danger"  radius="full"  icon={<IconClose/>} ></Checkbox>
          </div>
      
     
        </div>
        <div className="flex justify-between gap-3">
          <User   
          name="Jane Doe"
            avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
    <div className="flex gap-2" >
               <Checkbox defaultSelected color="primary"  radius="full" ></Checkbox>
               <Checkbox defaultSelected color="danger"  radius="full"  icon={<IconClose/>} ></Checkbox>
          </div>
      
     
        </div>
          </CardBody>
        </Card>
    
  )
}
