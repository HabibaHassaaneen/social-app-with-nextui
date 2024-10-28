
import {
    Button,
    Link,
    Textarea,
    Avatar,
    Card,
    Image,
    CardBody,
    Divider,
  } from "@nextui-org/react";
import React from 'react';


export default function Shortcuts (){

    return(

<Card>

<CardBody className="flex py-4 items-start gap-2 flex-col ">
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/posts.png"} width={24} height={24} />
            <span className=" text-gray-400">My Posts</span>
          </Button>

          <Button variant="light" aria-label="Take a photo">
            <Image src={"/activity.png"} width={24} height={24} />
            <span className=" text-gray-400">Activity</span>
          </Button>

          <Button variant="light" aria-label="Take a photo">
            <Image src={"/market.png"} width={24} height={24} />
            <span className=" text-gray-400">Marketplace</span>
          </Button>

          <Button variant="light" aria-label="Take a photo">
            <Image src={"/events.png"} width={24} height={24} />
            <span className=" text-gray-400">Albums</span>
          </Button>
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/albums.png"} width={24} height={24} />
            <span className=" text-gray-400">Albums</span>
          </Button>
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/videos.png"} width={24} height={24} />
            <span className=" text-gray-400">Videos</span>
          </Button>
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/news.png"} width={24} height={24} />
            <span className=" text-gray-400">News</span>
          </Button>
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/events.png"} width={24} height={24} />
            <span className=" text-gray-400">Events</span>
          </Button>
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/courses.png"} width={24} height={24} />
            <span className=" text-gray-400">Courses</span>
          </Button>
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/lists.png"} width={24} height={24} />
            <span className=" text-gray-400">Lists</span>
          </Button>
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/settings.png"} width={24} height={24} />
            <span className=" text-gray-400">Settings</span>
          </Button>




        </CardBody>
        </Card>
    )

}


