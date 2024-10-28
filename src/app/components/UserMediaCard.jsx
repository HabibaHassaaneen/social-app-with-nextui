import React from 'react'
import {Button,Image,Checkbox,Card,User,RadioGroup, Radio , CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";

import IconLocationDot from './../icons/IconLocationDot';
import IconBag from './../icons/IconBag';
import IconGraduationCap from './../icons/IconGraduationCap';
import IconLink from './../icons/IconLink';
import IconHeartSharp from './../icons/IconHeartSharp';

export default function UserMediaCard() {
  const list = [
    {
      title: "Orange",
      img: "https://th.bing.com/th/id/OIP.ooSXGVV-XrJovZQoEHF1bwHaE8?rs=1&pid=ImgDetMain",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://thumbs.dreamstime.com/b/mot-happiness-141984449.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://th.bing.com/th/id/OIP.fPu44XdELBeMUnz4wkSL0AHaHa?rs=1&pid=ImgDetMain",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://th.bing.com/th/id/OIP.pE2dgIniTr0TBetNbI3pAAAAAA?rs=1&pid=ImgDetMain",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://blog-assets.shawacademy.com/uploads/2016/03/Photography-techniques.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon",
      img: "https://th.bing.com/th/id/OIP.pE2dgIniTr0TBetNbI3pAAAAAA?rs=1&pid=ImgDetMain",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://blog-assets.shawacademy.com/uploads/2016/03/Photography-techniques.jpg",
      price: "$15.70",
    }, {
      title: "Lemon",
      img: "https://th.bing.com/th/id/OIP.pE2dgIniTr0TBetNbI3pAAAAAA?rs=1&pid=ImgDetMain",
      price: "$5.30",
    }
  ];
  return (
    <Card>
    <CardHeader className="flex justify-between gap-3">
        <span className='text-gray-500 font-semibold text-xs'> User Media</span>
    <Link href="#" className=' text-xs'>See all</Link>
          </CardHeader>

         
          < CardBody className="gap-2 grid grid-raw-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
         
        </Card>
   
      ))}
          </CardBody>
        </Card>
    
  )
}
