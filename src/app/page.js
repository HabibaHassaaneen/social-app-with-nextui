'use client'

import LeftMenue from './components/LeftMenue';
import RightMenue from './components/RightMenue';
import AddPost from './components/AddPost';
import Stories from './components/Stories';
import Feed from './components/Feed';
import { useUser } from '@clerk/clerk-react'
export default function Home() {

  return (
<div className="flex gap-6 pt-6 px-6 ">
  
<div className='hidden lg:block w-[20%]'> <LeftMenue type={'home'}/></div>
<div className='w-full md:w-[70%] lg:w-[50%]'>
<div className='flex flex-col gap-6'>
<Stories/>
<AddPost/>
<Feed/>
</div>
</div>
<div className='hidden md:block w-[30%]'><RightMenue/></div>
</div>

  );
}
