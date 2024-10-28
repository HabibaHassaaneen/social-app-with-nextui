"use client"
import React from 'react'


import {Dropdown, DropdownTrigger, DropdownMenu,Button, DropdownItem} from "@nextui-org/react";


export default function  DropdownContent ({variant, color}){ 


   return( 
  <Dropdown>
     <DropdownTrigger>
       <Button 
         color={color}
         variant={variant}
     className="  m-0 p-0"
isIconOnly
       >
<p className={' font-weight: 800 text-2xl'}> &#x2630;</p>
       </Button>
     </DropdownTrigger>
     <DropdownMenu 
       aria-label="Dropdown Variants"
       color={color} 
       variant={variant}
     >
       <DropdownItem key="new">New file</DropdownItem>
       <DropdownItem key="copy">Copy link</DropdownItem>
       <DropdownItem key="edit">Edit file</DropdownItem>
       <DropdownItem key="delete" className="text-danger" color="danger">
         Delete file
       </DropdownItem>
     </DropdownMenu>
   </Dropdown>
  )
 
}

