
'use client'
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import LeftMenue from './../../components/LeftMenue';
import Feed from './../../components/Feed';
import { Card, Avatar } from "@nextui-org/react";

import RightMenue from './../../components/RightMenue';



export default function Userprofilepage() {
 const { user,isLoaded}=useUser();
 console.log(user)
 return (
<div className="flex gap-6 pt-6 px-6 ">
  
  <div className='hidden lg:block w-[20%]'> <LeftMenue type={'profile'}/></div>
  <div className='w-full md:w-[70%] lg:w-[50%]'>
  <div className='flex flex-col '>

    <div className="w-full  mx-auto  rounded-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
        {/* Profile Image */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <Avatar
            size="xl"
            src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            bordered
            className=" w-32 h-32 ring-4 ring-white"
          />
        </div>
      </div>
      
      {/* User Info */}
      <div className="px-6 pt-16 pb-4">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          John Doe
        </h2>
        <div className='flex items-center justify-center gap-12 mb-4 mt-4 '>
<div className="flex flex-col items-center ">
<span className="font-medium">147</span>
<span className="text-sm">posts </span>


</div>
<div className="flex flex-col items-center ">
<span className="font-medium">1.2K</span>
<span className="text-sm">Followers </span>


</div>
<div className="flex flex-col items-center ">
<span className="font-medium">1.7K</span>
<span className="text-sm">Following </span>


</div>


        </div>
    
      </div>
    </div>

  <Feed/>

  </div>
  </div>
  <div className='hidden md:block w-[30%]'><RightMenue UserId='test'/></div>
  </div>
  )
}
