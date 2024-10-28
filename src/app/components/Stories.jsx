import React from 'react'
import {Card, CardBody,Avatar} from "@nextui-org/react";

export default function Stories() {
  return (
    <Card > 
    <CardBody >
    <div className='flex gap-8 items-center '>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
     
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="secondary" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="warning" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
     
      <text>Name</text>
    </div>
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
    <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      <text>Name</text>
    </div>
    </div>
    </CardBody>
  </Card>
  )
}
